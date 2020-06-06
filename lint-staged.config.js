const linter = {
	node: filenames =>
		`eslint --ext js,json ${filenames.join(
			' '
		)}`,
};

module.exports = {
	'index.js': linter.node,
};