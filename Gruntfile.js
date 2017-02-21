module.exports = function(grunt) {

  grunt.initConfig({
     browserify: {
      dist: {
        options: {
          transform: [
            ['babelify',{presets: ['es2015', 'react']}]
            // ['uglifyify', {}]
          ],
          browserifyOptions: {
            debug: true
          }
        },        
        src: ['src/app.js'],
        dest: 'compiled.js',
      }
    },
    watch: {
      options: { interval: 400 },
      compile: {
        files: ['src/**/*.js'],
        tasks: ['browserify'],
        options: { spawn: false, },
      },
      livereload: {
        options: {livereload: true, event: ['added', 'deleted', 'changed']},
        files: ['compiled.js']
      }
    },
    exorcise: {
      bundle: {
        options: {},
        files: {
          'app.js.map': ['app.js']
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-exorcise');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['browserify']);



};
