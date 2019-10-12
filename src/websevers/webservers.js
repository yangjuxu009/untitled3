const express = require('express');
const fs = require("fs");
let server = express();
// 告诉服务器去哪里读取静态文件
// 参数是静态文件的路径
server.use(express.static('./../src/fetchJSON'));

server.use('/fetchJSON/fetchAction',(req,res)=>{
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log('55555555555555555555555 : ');
    fs.readFile("./../fetchJSON/fetchAction.JSON", "utf-8", function(error, data) {
        // console.log(error);  //如果err为null就说明读取成功了,没有出错
        // console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出

        //  用error来判断文件是否读取成功
        if (error) console.log("读取文件失败,内容是" + error.message);
        console.log("读取文件成功,内容是" + data);
        res.send(JSON.parse(data));
    });

});
server.use('/user',(req,res)=>{
    console.log('55555555555555555555555 : ');
    res.send('index');
});
server.listen(8080);



