module.exports = function(grunt) {

    //Generator
    var tempFile;
    var mainFiles = ['bdp', 'history', 'impressum', 'index-2011', 'index-2013', 'index-2014', 'index', 'kontakt', 'neu', 'stamm','bild2015', 'bild2014', 'bild2013', 'bild2012', 'bild2011'];
    var bdpFiles = ['fahrt', 'jurte', 'kluft', 'kohte', 'musik', 'stufen', 'versprechen', 'musiksammlung'];
    var stammFiles = ['equipment', 'gruppenstunden', 'member', 'pfadfinder', 'rr', 'termine', 'woelflinge'];

    var htmlMinFiles = {};
    var concatFiles = {};

    mainFiles.forEach(function(item) {
        var filePath = 'bin/' + item + '.html';
        htmlMinFiles[filePath] = filePath;
    });

    mainFiles.forEach(function(item) {
        var filePath = 'bin/' + item + '.html';
        var t = 'source/template/';
        concatFiles[filePath] = [t + 'head.html', t + 'nav.html', 'source/content/' + item + '.html', t + 'foot.html'];
    });

    bdpFiles.forEach(function(item) {
        var filePath = 'bin/bdp/' + item + '.html';
        htmlMinFiles[filePath] = filePath;
    });

    bdpFiles.forEach(function(item) {
        var filePath = 'bin/bdp/' + item + '.html';
        var t = 'source/template/';
        concatFiles[filePath] = [t + 'head.html', t + 'nav.html', 'source/content/bdp/' + item + '.html', t + 'foot.html'];
    });

    stammFiles.forEach(function(item) {
        var filePath = 'bin/stamm/' + item + '.html';
        htmlMinFiles[filePath] = filePath;
    });

    stammFiles.forEach(function(item) {
        var filePath = 'bin/stamm/' + item + '.html';
        var t = 'source/template/';
        concatFiles[filePath] = [t + 'head.html', t + 'nav.html', 'source/content/stamm/' + item + '.html', t + 'foot.html'];
    });

    grunt.initConfig({
        pkg: '<json:package.json>',
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: false
                },
                files: htmlMinFiles
            }
        },
        concat: {
            dist: {
                files: concatFiles
            },
            nav: {
                options: {
                    process: function(src, filepath) {
                        var fileName = filepath.split("/")[1].replace(".html", "");
                        var regEx = new RegExp("nav-" + fileName, "g");
                        return src.replace(regEx, "selected");
                    },
                },
                files: htmlMinFiles
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'bin/css/standard.css': 'source/css/standard.css'
                }
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'source/res/',
                    src: ['**'],
                    dest: 'bin/res/'
                }]
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default', ['concat:dist', 'cssmin', 'copy', 'htmlmin', 'concat:nav']);
};
