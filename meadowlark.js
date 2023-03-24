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
app.get('/',(req,res)=> {
  res.type('text/plain')
  res.send('지은짱짱');
})
app.get('/about',(req,res)=> {
  res.type('text/plain')
  res.send('지은천재');
})
// custom 404 page

app.use((req,res)=>{
  res.type('text/plain')
  res.status(404)
  res.send('404 -Not Found')
}) 

//custom 500 page
app.use((err,req,res,next)=>{
  console.error(err.message)
  res.type('text/plain')
  res.status(404)
  res.send('404 -Not Found')
}) 

app.listen(port, () =>console.log(
  `Express started on http://localhost:${port};` +
  `press 컨트롤C ㅎㅎ`))
