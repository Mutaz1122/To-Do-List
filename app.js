const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'ejs');
const port = 3000
var items=[];
app.get('/', (req, res) => {
    var day="";
    // res.send(today.getDay()+"")
    // if(today.getDay=== 5|| today.getDay=== 6 ){
    //     day="weekend"}
    // else{
    //     day="work day"
    // }   
    var options = { weekday: 'long', day: 'numeric', month: 'long' };
    var today  = new Date();

    day= today.toLocaleDateString("en-US", options);
    res.render('list', {kindOfDay: day , newItems: items}); 
  })

  app.post("/", function(req,res){

    items.push(req.body.newItem);
    res.redirect("/");


  });
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
