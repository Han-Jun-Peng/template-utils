import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

// rollup.config.mjs
export default {
	input: "./src/index.ts",
	output: [
		{
			file: "./build/index.cjs.js",
			format: "cjs",
		},
		{
			file: "./build/index.esm.js",
			format: "esm",
		},
		{
			file: "./build/index.script.js", // 这将用于script标签引入
			format: "iife",
			name: "demo",
		},
	],

	plugins: [terser(), typescript()],
};
