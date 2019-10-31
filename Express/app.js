var express=require("express");
var app=express();

app.get("/",function(req,res){

	res.send("hii there!!");
});
app.get("/bye",function(req,res)
{
	console.log("in bye")
	res.send("good byee!!");

});
app.get("*",function(req,res)
{
	console.log("Exit")
	res.send("good byee!!");

});
app.listen(3000,function()
{

	console.log("hiiiiiii server connected");
})