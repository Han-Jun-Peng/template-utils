const lintStagedConfig = {
	"*.{js,jsx}": ["eslint --fix", "prettier --write"],
	"*.{ts,tsx}": ["tsc --noEmit", "eslint --fix", "prettier --write"],
};

export default lintStagedConfig;
