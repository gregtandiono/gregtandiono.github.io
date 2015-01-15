module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      compile: {
        options: {
          cleancss: true
        },
        files: {
          'stylesheets/compiled/main.min.css': 'stylesheets/less/main.less'
        }
      }
    },

    react: {
      files: 'javascripts/react-components/**/*.jsx',
      tasks: ['browserify']
    },

    watch: {
      stylesheets: {
        files: ['stylesheets/less/**/*.less'],
        tasks: ['less']
      },
      react: {
        files: ['javascripts/react-components/**/*.jsx'],
        tasks: ['browserify']
      },
    },

    browserify: {
      options: {
        transform: [require('grunt-react').browserify]
      },
      client: {
        src: ['javascripts/react-components/**/*.jsx'],
        dest: 'javascripts/app.compiled.js'
      }
    },

    uglify: {
      my_target: {
        files: {
          'javascripts/app.compiled.js': 'javascripts/app.compiled.js'
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['browserify', 'less', 'uglify']);
};
