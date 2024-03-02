import plugin from "tailwindcss/plugin";

export default plugin(function tailwindRam({ matchUtilities, theme }) {
  matchUtilities(
    {
      ram: (value) => ({
        gridTemplateColumns: `repeat(auto-fit,minmax(${value},1fr))`,
      }),
      "ram-fill": (value) => ({
        gridTemplateColumns: `repeat(auto-fill,minmax(${value},1fr))`,
      }),
    },
    { values: theme("spacing") }
  );
});
