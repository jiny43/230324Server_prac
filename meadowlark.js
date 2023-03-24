// 이 파일은 프로젝트의 진입점 entry point = 앱파일

const express = require('express')
const expressHandlebars =require('express-handlebars')
const app = express()

//핸들바 뷰 엔진 설정
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
const port =process.env.PORT || 3000
//홈페이지와 어바웃 페이지에서 사용할 경로를 추가
app.get('/',(req,res)=> res.render('home'))
app.get('/about',(req,res)=>res.render('about'))
// custom 404 page

app.use((req,res)=>{
  res.status(404)
  res.render('404')  //랜더 변경
}) 

//custom 500 page
app.use((err,req,res,next)=>{
  console.error(err.message)
  res.status(500)
  res.render('500') //랜더 변경
}) 

app.listen(port, () =>console.log(
  `Express started on http://localhost:${port};` +
  `press 컨트롤C ㅎㅎ`))
