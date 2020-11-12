const express = require('express');
const path = require('path')
const app = express();

// 静态资源服务器
app.use(express.static(path.join(__dirname,'../public'),{
    maxAge:1000*30
}));

app.listen(2004,()=>{
    console.log(`server is running`)
})