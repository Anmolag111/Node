var express=require("express");
var app=express();
var bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
/*app.use(express.static("public"));
*/
/*
app.get("/:thing/:yes",function(req,res){
	var thingvar=req.params.thing;
	res.render("home",{thing:thingvar});
})
*/

app.set("view engine","ejs");
var friend=["aaa","bbb","ccc"];
/*app.get("/:posts",function(req,res){
	var posts=[
{title:"yes",author:"no"},
{title:"blah",author:"blah"},
{title:"blahhh",author:"blahh"},

	]
	res.render("posts",{posts:posts});
})*/
app.get("/friends",function(req,res){

	res.render("posts",{friend:friend})

})


app.get("/",function(req,res){

	res.send("hii there!!");
});

app.post("/addfriend",function(req,res)
{
	var newfriend =req.body.newfriend;
	friend.push(newfriend);
	res.redirect("/friends");


})

app.listen(3000,function(req,res){

console.log("Server Started");

})