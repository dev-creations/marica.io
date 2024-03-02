import plugin from "tailwindcss/plugin";

export default plugin(function tailwindRam({ matchUtilities, theme }) {
  matchUtilities(
    {
      ram: (value) => ({
        gridTemplateColumns: `repeat(auto-fit,minmax(${value},1fr))`,
      }),
    },
    { values: theme("spacing") }
  );
});
