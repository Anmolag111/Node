var express=require("express");
var app=express();
app.get("/",function(req,res)
{

res.send("My first assignment")

});
app.get("/:animal",function(req,res)
{
var animal=req.params.animal;

var sounds=
{
pig:"ssks",
wolf:"woof",
cat:"no",
}
/*if(animal=="pig")
	{sound="hdj";}

*/
var sound=sounds[animal];
res.send("The "+animal+" says"+sound);
});
app.get("/:message/:times",function(req,res){

var message=req.params.message;
var times=Number(req.params.times);
var result="";
for(var i=0;i<times;i++)
	{result+=message+" ";}
res.send(result+" ");
})

app.listen(3000,function()
{
	console.log("Server Started");
})