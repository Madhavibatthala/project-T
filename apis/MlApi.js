const exp = require("express");
const mlApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
mlApp.use(exp.json());
mlApp.get("/getblogs",expressAsyncHandler(async(request,response)=>{
     let mlCollectionObject = request.app.get("mlCollectionObject");
     let ml = await mlCollectionObject.find().toArray();
     response.send({message : "all blogs",payload : ml});
}));
mlApp.post("/postblog",expressAsyncHandler(async(request,response)=>{
    let mlCollectionObject = request.app.get("mlCollectionObject");
    let mlObj = request.body;
    let result = await mlCollectionObject.insertOne(mlObj)
    response.send({message : "blog created successfully"});
}));
module.exports = mlApp;