import js from "@eslint/js";

export default [
	{
		...js.configs.recommended,
		files: ["./**/src/**/*.{js,mjs,cjs,ts}"],
		ignores: ["./**/src/*.config.{js,mjs,cjs,ts}"],
	},
];
