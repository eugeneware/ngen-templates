var spawn = require('child_process').spawn;
var now = new Date();

exports.variables = {
    project: 'Project name: ',
    description: 'Project description: ',
    name: function(values, callback) {
        spawn('git', [
            '--bare',
            'config',
            '--global',
            'user.name'
        ]).stdout.once('data', callback);
    },
    email: function(values, callback) {
        spawn('git', [
            '--bare',
            'config',
            '--global',
            'user.email'
        ]).stdout.once('data', callback);
    },
	year: function(values, callback) {
		callback(now.getFullYear());
	},
	date: function(values, callback) {
		callback(now.toISOString().substr(0, 10));
	}
};
