# @marica.io/tailwind-ram

A plugin for Tailwind that provides utilities to create grids according to the RAM pattern (https://towardsdev.com/ram-css-layout-pattern-38d2a9c090fc)

## Installation

Install the plugin via npm

```bash
npm i -D @marica.io/tailwind-ram
```

Then add the plugin to your Tailwind config

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
  ],
  theme: {
    // ...
  },
  plugins: [
    //...,
    require("@marica.io/tailwind-ram"),
  ],
};
```

## Usage

You can use the new `ram-` class to style any grid element. This will ensure that grid items are at least 250px wide but
they will keep growing with the container:

```jsx
<div className="grid w-full ram-[250px]">{/* items */}</div>
```

The default is `auto-fit`, if you want to use `auto-fill` then you can use `ram-fill` instead:

```jsx
<div className="grid w-full ram-fill-[250px]">{/* items */}</div>
```

This would potentially create a blank space when the container is wide enough to hold more items than you actually have.
