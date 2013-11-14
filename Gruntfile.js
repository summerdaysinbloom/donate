module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            dev: {
                options: {
                    yuicompress: true
                },
                files: {
                    'assets.css' : ['less/**/*.less']
                }
            }
        },
        watch: {
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        }
    });

    // watch files
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Compile less files
    grunt.loadNpmTasks('grunt-contrib-less');
 
    // Client server.
    grunt.registerTask('default', ['watch']);
};