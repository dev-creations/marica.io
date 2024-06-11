const { UserConfig } = require('@11ty/eleventy');
const fs = require('fs');
const path = require('path');
const lunr = require('lunr');
const pluginNavigation = require('@11ty/eleventy-navigation');
const pluginBundle = require('@11ty/eleventy-plugin-bundle');
const { JSDOM } = require('jsdom');
const tableOfContents = require('./src/_utilities/table-of-contents.js');
const anchorHeadings = require('./src/_utilities/anchor-headings.js');
const tailwind = require('tailwindcss');
const postCss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const postcssFilter = (cssCode, done) => {
  postCss([tailwind(require('./tailwind.config')), autoprefixer(), cssnano({ preset: 'default' })])
    .process(cssCode, {
      from: './src/_includes/styles/tailwind.css',
    })
    .then(
      r => done(null, r.css),
      e => done(e, null),
    );
};

const assetsDir = 'public';

let hasSearchIndex = false;

/**
 *
 * @param {UserConfig} eleventyConfig
 * @returns
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginBundle);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(syntaxHighlight, {
    // Line separator for line breaks
    lineSeparator: '\n',

    // Change which Eleventy template formats use syntax highlighters
    templateFormats: ['*'], // default

    // Added in 3.1.1, add HTML attributes to the <pre> or <code> tags
    preAttributes: {
      tabindex: 0,

      // Added in 4.1.0 you can use callback functions too
      'data-language': function ({ language, content, options }) {
        return language;
      },
    },
    codeAttributes: {},

    // Added in 5.0.0, throw errors on invalid language names
    errorOnInvalidLanguage: false,
  });
  eleventyConfig.addGlobalData('toc', true);

  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css');
  eleventyConfig.addNunjucksAsyncFilter('postcss', postcssFilter);

  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 5000,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: false,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    // https: {
    // key: "./localhost.key",
    // cert: "./localhost.cert",
    // },

    // Change the default file encoding for reading/serving files
    encoding: 'utf-8',

    // Show the dev server version number on the command line
    showVersion: false,

    // Added in Dev Server 2.0+
    // The default file name to show when a directory is requested.
    indexFileName: 'index.html',

    // Added in Dev Server 2.0+
    // An object mapping a URLPattern pathname to a callback function
    // for on-request processing (read more below).
    onRequest: {},

    watch: ['public/**/*'],
  });

  eleventyConfig.addPassthroughCopy(assetsDir);

  eleventyConfig.addShortcode('tags', function (...tags) {
    return `<ul class="search-tags flex gap-2 my-2">${tags.map(t => `<li class="bg-blue-500 text-white rounded-md px-2 py-1 text-xs">${t}</li>`).join('')}</ul>`;
  });

  eleventyConfig.on('eleventy.after', ({ results }) => {
    if (hasSearchIndex) {
      return;
    }

    const map = {};
    const searchIndexFilename = path.join(eleventyConfig.dir.output, assetsDir, 'search.json');
    const lunrInput = path.resolve('../../node_modules/lunr/lunr.min.js');
    const lunrOutput = path.join(eleventyConfig.dir.output, assetsDir, 'scripts/lunr.js');
    const searchIndex = lunr(function () {
      // The search index uses these field names extensively, so shortening them can save some serious bytes. The
      // initial index file went from 468 KB => 401 KB by using single-character names!
      this.ref('id'); // id
      this.field('t', { boost: 50 }); // title
      this.field('h', { boost: 25 }); // headings
      this.field('n', { boost: 25 }); // tags
      this.field('c'); // content

      results.forEach((result, index) => {
        const url = path
          .join('/', path.relative(eleventyConfig.dir.output, result.outputPath))
          .replace(/\\/g, '/') // convert backslashes to forward slashes
          .replace(/\/index.html$/, '/'); // convert trailing /index.html to /
        const doc = new JSDOM(result.content, {
          // We must set a default URL so links are parsed with a hostname. Let's use a bogus TLD so we can easily
          // identify which ones are internal and which ones are external.
          url: `https://internal/`,
        }).window.document;
        const content = doc.querySelector('#content');

        // Get title and headings
        const title = (doc.querySelector('title')?.textContent || path.basename(result.outputPath)).trim();
        const headings = [...content.querySelectorAll('h1, h2, h3, h4')]
          .map(heading => heading.textContent)
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();
        const tags = [...doc.querySelectorAll('.search-tags > li')]
          .map(li => li.textContent)
          .join(' ')
          .replace(/\s+/g, ' ')
          .trim();

        // Remove code blocks and whitespace from content
        [...content.querySelectorAll('code[class|=language]')].forEach(code => code.remove());
        const textContent = content.textContent.replace(/\s+/g, ' ').trim();

        // Update the index and map
        this.add({ id: index, t: title, h: headings, n: tags, c: textContent });
        map[index] = { title, url };
      });
    });

    // Copy the Lunr search client and write the index
    fs.mkdirSync(path.dirname(lunrOutput), { recursive: true });
    fs.copyFileSync(lunrInput, lunrOutput);
    fs.writeFileSync(searchIndexFilename, JSON.stringify({ searchIndex, map }), 'utf-8');

    hasSearchIndex = true;
  });

  // Generates a URL relative to the site's asset directory
  eleventyConfig.addNunjucksGlobal('assetUrl', (value = '', absolute = false) => {
    value = path.join(`/${assetsDir}`, value);
    return absolute ? new URL(value, eleventyConfig.globalData.baseUrl).toString() : value;
  });

  eleventyConfig.addTransform('html-transform', function (content) {
    const doc = new JSDOM(content, {
      // We must set a default URL so links are parsed with a hostname. Let's use a bogus TLD so we can easily
      // identify which ones are internal and which ones are external.
      url: `https://internal/`,
    }).window.document;

    anchorHeadings(doc, {
      within: '#content',
      levels: ['h2', 'h3', 'h4', 'h5'],
    });
    tableOfContents(doc, {
      levels: ['h2', 'h3'],
      container: 'aside.content--with-toc .content__toc ul',
      within: 'main',
    });

    content = `<!DOCTYPE html>\n${doc.documentElement.outerHTML}`;

    return content;
  });

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: '_site',
      data: '_data',
    },
  };
};
