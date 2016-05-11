(function(){
    var gulp = require('gulp')
        Server = require('karma').Server;

    gulp.task('console', function() {
        console.log('w');
    });
    gulp.task('test', function (done) {
        new Server({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, function(){
            done();
        }).start();
});
}());
