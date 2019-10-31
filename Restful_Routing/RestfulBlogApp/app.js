var bodyParser=require("body-parser"),
	mongoose=require("mongoose"),
	express=require("express"),
	app=express();
	methodOverride=require("method-override"),
	expressSanitizer=require("express-sanitizer")

mongoose.connect("mongodb://localhost:27017/restful_Blog_App",{useNewUrlParser: true});
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(expressSanitizer());
var BlogSchema=new mongoose.Schema({
title:String,
image:String,
body:String,
created:{type:Date,default:Date.now}
});

var Blog=mongoose.model("Blog",BlogSchema);

app.get("/",function(req,res){

res.redirect("/blogs");

});

app.get("/blogs",function(req,res){
Blog.find({},function(err,blogs)
{
if(err){
	console.log("Error");
}
else
{res.render("index",{blogs:blogs});}

})
});

app.get("/blogs/new",function(req,res){
	res.render("new");
})

app.get("/blogs/:id",function(req,res){
	Blog.findById(req.params.id,function(err,FoundBlog)
	{
if(err){res.redirect("/blogs")}
	else
	{res.render("show",{blog: FoundBlog});}

	})
	
})

app.get("/blogs/:id/edit",function(req,res){
	Blog.findById(req.params.id,function(err,FoundBlog)
	{
if(err){res.redirect("/blogs")}
	else
	{res.render("edit",{blog: FoundBlog});}

	})
	
})
app.put("/blogs/:id",function(req,res){
	req.body.blog.body=req.sanitize(req.body.blog.body);
console.log("------------------");
console.log(req.body);
	Blog.findByIdAndUpdate(req.params.id,function(err,FoundBlog){
if(err){res.redirect("/blogs")}
			else
				{res.redirect("/blogs"+req.params.id)}
	})
})
app.delete("/blogs/:id",function(req,res){
	Blog.findByIdAndRemove(req.params.id,function(err,FoundBlog){
if(err){res.redirect("/blogs")}
			else
				{res.redirect("/blogs")}
	})
})

app.post("/blogs",function(req,res){

	Blog.create(req.body.blog,function(err,newBlog){
		if(err){res.render("new")}
			else
				{res.redirect("/blogs")}
	})
})
app.listen(3000,function(req,res){

	console.log("Server Started");
});