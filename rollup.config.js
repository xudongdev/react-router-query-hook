import typescript from "rollup-plugin-ts";
import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    plugins: [typescript({ transpiler: "babel" })],
    external: ["qs", "react", "react-router-dom"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ]
  }
];
