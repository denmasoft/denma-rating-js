module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            rating: {
                src: [
                    './js/jquery.barrating.min.js',
                    './js/rating.js'
                ],
                dest: './js/rating.min.js'
            },
        },
        cssmin: {
            target: {
                src: ['./css/rating.css',
                      './css/font-awesome.min.css', 
                    './themes/fontawesome-stars-o.css'
                ],
                dest: './css/rating.min.css'
            }
        }
        //grunt task configuration will go here     
    });
    //load grunt task
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //register grunt default task
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify', 'cssmin', 'closure-compiler', 'imagemin']);
}