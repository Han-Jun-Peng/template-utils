import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
	{
		...js.configs.recommended,
		...tseslint.configs.recommended,
		files: ["**/src/**/*.{js,mjs,cjs,ts}"],
		ignores: [
			"**/*.cofig.{js,mjs,cjs,ts}",
			"**/node_modules/**/*.{js,mjs,cjs,ts}",
		],
	},
];
