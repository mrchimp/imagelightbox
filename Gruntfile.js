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
    jshint: {
      dist: ['src/imagelightbox.js']
    },
    less: {
      dist: {
        options: {
          paths: [
            'src/imagelightbox.less'
          ]
        },
        files: {
          'dist/imagelightbox.css': 'src/imagelightbox.less'
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/imagelightbox.min.css': ['dist/imagelightbox.css']
        }
      }
    },
    focus: {
      all: {}
    },
    watch: {
      js: {
        files: ['src/*.js'],
        tasks: ['uglify:build'],
        options: {
          nospawn: true
        }
      },
      less: {
        files: ['src/*.less'],
        tasks: ['less:dist', 'cssmin:dist'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-focus');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['less', 'jshint', 'uglify', 'cssmin']);
  grunt.registerTask('watch-all', ['focus:all']);

};