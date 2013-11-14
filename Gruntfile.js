module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 4000,
                    keepalive: true,
                    base: '.'
                }
            }
        },
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

    // Front-end server
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    // watch files
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Compile less files
    grunt.loadNpmTasks('grunt-contrib-less');
 
    // Compile less task.
    grunt.registerTask('theme', ['watch']);
    
    // Client server.
    grunt.registerTask('default', ['connect']);
};