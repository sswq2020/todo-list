const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer({dest:'upload'})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/api/v1/people',(req,res)=>{
  res.set('my-custom-header','Angular rocks')
  res.json([{"name":"张三","age":12},{"name":"李四","age":22}])
})

app.post('/api/v1/people',(req,res)=>{
  res.json(req.body)
})

app.post('/api/v1/people/123/avatar',upload.single('avatar'),(req,res)=>{
  res.send(res.file)
})

app.listen(3000)

console.log("Server is runninf at port 3000")
