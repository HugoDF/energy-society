'use strict()';

var config= {
	port: 3000
};

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		express: {
			options: {
				port: config.port
			},
			dev: {
				options: {
					script: 'keystone.js',
					debug: true
				}
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				force: true
			},
			all: [ 'routes/**/*.js',
						 'models/**/*.js'
			],
			server: [
				'./keystone.js'
			]
		},

		concurrent: {
			dev: {
				tasks: ['nodemon', 'node-inspector', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		'node-inspector': {
			custom: {
				options: {
					'web-host': 'localhost'
				}
			}
		},

		nodemon: {
			debug: {
				script: 'keystone.js',
				options: {
					nodeArgs: ['--debug'],
					env: {
						port: config.port
					}
				}
			}
		},

		imagemin: {
      dev: {
        options: {
          optimizationLevel: 1,
        },
        files: [{
          expand: true,                  
          cwd: './public/images',          
          src: ['**/*.{png,jpg,gif}'],   
          dest: './public/images'                  
        }]
      },
      dist: {
        options: {
          optimizationLevel: 7,
        },
        files: [{
          expand: true,                  
          cwd: './public/images',          
          src: ['**/*.{png,jpg,gif}'],   
          dest: './public/images'                  
        }]
      },
    },


		sass: {
			bootstrap:{
				options: {
					style: 'compressed',
					sourcemap: 'none',
				},
				files: {
					'public/styles/bootstrap.min.css': 'public/styles/bootstrap.scss'
				}
			},

			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
				},
				files: {
					'public/styles/site.min.css': 'public/styles/site.scss'
				}
			}
		},

		uglify: {
			dist: {
				options:{
					compress: true,
					mangle: true
				},
				files: {
					'public/js/energy-soc.min.js': 'public/js/energy-soc.js'
				},
			},
		},

		watch: {
			js: {
				files: [
					'model/**/*.js',
					'routes/**/*.js'
				],
				tasks: ['jshint:all']
			},
			express: {
				files: [
					'keystone.js',
					'public/js/lib/**/*.{js,json}'
				],
				tasks: ['jshint:server', 'concurrent:dev']
			},
			livereload: {
				files: [
					'public/styles/**/*.css',
					'public/styles/**/*.less',
					'templates/**/*.jade',
					'node_modules/keystone/templates/**/*.jade'
				],
				options: {
					livereload: true
				}
			}
		}
	});
	// load tasks from npm modules
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-contrib-sass');
	// load jshint
	grunt.registerTask('lint', function(target) {
		grunt.task.run([
			'jshint'
		]);
	});

	// default option to connect server
	grunt.registerTask('serve', function(target) {
		grunt.task.run([
			'jshint',
			'concurrent:dev'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve:' + target]);
	});

	grunt.registerTask('build', ['sass:bootstrap','sass:dist', 'uglify:dist', 'imagemin:dist'] );

};
