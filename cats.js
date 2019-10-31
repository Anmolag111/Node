var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema =new mongoose.Schema({
name: String,
age:Number,
temperament:String
});

var Cat=mongoose.model("Cat",catSchema);

/*
var george=new Cat({
name: "Norris",
age:7,
temperament:"Evil"

*/
/*
});
george.save(function(err,cat){
	if(err)
		{console.log("error")}
		else{
			console.log(" NO error")
			console.log(cat)
		}


});*/
//
//create directly instead doing in two steps
Cat.create({
name: "Snow White",
age:15,
temperament:"Nice"

},function(err,cats){

if(err)
		{console.log("error")}
		else{
			console.log(" NO error")
			console.log(cats)
		}
	})
		
Cat.find({},function(err,cats){

if(err)
		{console.log("error")}
		else{
			console.log(" NO error")
			console.log(cats)
		}

})