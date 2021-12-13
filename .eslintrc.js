module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier'
	],
	plugins: ['@typescript-eslint'],
	rules: {
		strict: ['error', 'never'],
		semi: ['error', 'never'],
		quotes: ['error', 'single', { avoidEscape: true }],
		'jsx-quotes': ['error', 'prefer-double'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/ban-ts-comment': 'off'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		project: ['tsconfig.json', 'tsconfig.dev.json']
	},
	env: {
		es2017: true,
		node: true
	}
}
