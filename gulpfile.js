// 怎么知道我想要打包生成环境还开发环境？
// 需要知道输入的执行命令
// nodejs中有个全局对象 process 进程对象
// console.log( process )// {...}
// console.log( process.argv )// [...]
// console.log( process.argv[2] )// dev  build ...

// let mode = process.argv[2]

// switch(mode){
//   case 'dev':
//     require('./gulpfile-dev.js')
//     break
//   case 'build':
//     require('./gulpfile-build.js')
//     break
// }
let gulp = require('gulp')

gulp.task('task1',(done)=>{
  console.log('执行')
  done()
})
gulp.task('default',(done)=>{
  console.log('成功')
  done()
})

function task2(){
  console.log('完成了')
}

module.exports = {task2}

gulp.task('task3',async ()=>{
  console.log('执行')
})

gulp.task('copyCss',async ()=>{
  gulp.src('./sass/*.css')
  .pipe(gulp.dest('./dist/css'))
})

gulp.task('copyJs',async ()=>{
  gulp.src('./js/*.js')
  .pipe(gulp.dest('./dist/js'))
})

gulp.task('copyHtml',async ()=>{
  gulp.src('./pages/*.html')
  .pipe(gulp.dest('./dist/pages'))
})

gulp.task('copyImg',async ()=>{
  gulp.src('./img/*.*')
  .pipe(gulp.dest('./dist/img'))
})

gulp.task('build',gulp.parallel('copyCss','copyJs','copyHtml','copyImg'))

