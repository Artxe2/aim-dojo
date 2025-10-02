import lube from "eslint-plugin-lube"
import { parser } from "typescript-eslint"

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		...lube.configs,
		files: [ "**/*.js", "**/*.d.ts" ],
		languageOptions: {
			ecmaVersion: "latest",
			parser,
			sourceType: "module"
		},
		rules: { ...lube.configs.rules }
	},
	{
		files: [ "**/*.d.ts" ],
		rules: { "no-unused-vars": "off" }
	}
]