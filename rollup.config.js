import pkg from "./package.json";

export default [
  {
    input: "src/useQuery.js",
    external: ["qs", "react", "react-router-dom"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ]
  }
];
