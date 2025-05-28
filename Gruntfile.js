module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'assets/bundle.js': ['src/index.js'],
        },
        options: {
          transform: [['babelify', { presets: ['@babel/preset-env'] }]],
          browserifyOptions: {
            debug: true,
          },
        },
      },
    },

    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask('default', ['browserify']);
};
