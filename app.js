<<<<<<< HEAD
process.env.PWD = process.cwd()


var express = require("express");
var path = require("path");


var routes = require("./routes");

var app = express();


app.use(express.urlencoded({ extended: true}))
app.set("port", process.env.PORT || 2022);

app.use(express.static(process.env.PWD + '/public'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.use(routes); 

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
=======
var express = require("express");
var path = require("path");


var routes = require("./routes");

var app = express();


app.use(express.urlencoded({ extended: true}))
app.set("port", process.env.PORT || 2022);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.use(routes); 

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
>>>>>>> df7f9f9ed2231ae39ea684d1551ae673f527f383
});