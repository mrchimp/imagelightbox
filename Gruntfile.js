module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false,
        compress: false
      },
      dist: {
        files: {
          'dist/imagelightbox.min.js': 'src/imagelightbox.js'
        }
      }
    },
    focus: {
      all: {}
    },
    watch: {
      dist: {
        files: ['src/*.js'],
        tasks: ['uglify:build'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-focus');
  grunt.loadNpmTasks('grunt-jshint');

  grunt.registerTask('default', ['jshint', 'uglify']);
  grunt.registerTask('watch-all', ['focus:all']);

};