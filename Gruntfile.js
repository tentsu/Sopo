'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'web/css',
					src: ['*.scss'],
					dest: 'web/css',
					ext: '.css'
        }]
			},
		},
		watch: {
			sass: {
				files: ['web/css/*.scss'],
				tasks: ['sass']
			},
			livereload: {
				options: {
					livereload: true,
				},
				files: ['web/**/*', 'index.html'],
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
