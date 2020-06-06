const path = require('path');

const tasks = arr => arr.join(' && ');

module.exports = {
	hooks: {
		'pre-commit': 'lint-staged --no-stash'
	}
};