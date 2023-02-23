const exp = require("express");
const webdevApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
webdevApp.use(exp.json());
webdevApp.get("/getblogs",expressAsyncHandler(async(request,response)=>{
      let webdevCollectionObject = request.app.get("webdevCollectionObject");
      let webdev = await webdevCollectionObject.find().toArray();
      console.log(webdev);
      response.send({message : "all blogs",payload : webdev});
 }));
webdevApp.post("/postblog",expressAsyncHandler(async(request,response)=>{
    let webdevCollectionObject = request.app.get("webdevCollectionObject");
    let webdevObj = request.body;
    let result = await webdevCollectionObject.insertOne(webdevObj)
    response.send({message : "blog created successfully"});
}));

module.exports = webdevApp;