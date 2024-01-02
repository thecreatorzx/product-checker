const express = require("express");
const { createWorker } = require("tesseract.js");
const expressSession = require("express-session");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
// app.use(expressSession({ secret: "secret", resave:false, saveUninitialized:false, cookie:{maxAge:600000}}
// ));

let data = async () => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize('./picture1.png');
    const txt = ret.data.text;
    console.log(txt);
    console.log(typeof(txt));
    await worker.terminate();
  };
data();

app.get("/",(req,res)=>{
//    res.send(data());
   res.send("hello this is base route");
})

app.listen(3000 ,()=>{
    console.log("listneing on http://localhost:3000");
});