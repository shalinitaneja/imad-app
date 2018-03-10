var express = require('express');
var morgan = require('morgan');
var path = require('path');


//for database connectivity
var pool=require('pg').Pool;
var config=
{
    user: 'shalinitaneja1966',
    database: 'shalinitaneja1966',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};


var pool =new Pool(config);

/*

app.get('/testdb',function(req,res)
{
    res.send("hello");
    /*
    pool.query('select * from users;',function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
         {
          res.send(JSON.stringify(result));
         }
    });
});  */





var app = express();
app.use(morgan('combined'));

app.get('/shalini',function(req,res){
    res.send("<font face=chiller color=red size=10><h1>hello shalini</h1></font>");
});   
var articleTwo={
    title:"tile for article-two",
    heading:"ARTICLE TWO",
    date:"sept 25, 2017",
    content:`   <p>first line of article two</p>
    <p>second line of article two</p>
    <p>third  line of article two</p>`
    };
var articleThree={
    title:"tile for article-three",
    heading:"ARTICLE THREE",
    date:"sept 25, 2018",
    content:`   <p>first line of article three</p>
    <p>second line of article three</p>
    <p>third  line of article three</p>`
    };
    
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`<html> 
    <head><title>${title} </title> 
    </head>  
    <body> 
    <div>  
      <a href='/'>HOME</a>  
    </div>   
    <hr>   
    <h3>${heading}</h3>   
    <div>${date}</div>    
    <div>${content}</div>  
    </body>   
    </html> `;
    return htmlTemplate;
}
 
 var mainOne ={
     name:'saloni',
     age:22,
     id:'saloni@yahoo.co.in'
 };
app.get('/shalini',function(req,res){
    res.send(create(mainOne));
});   
function create(data){
    var name=data.name;
    var age=data.age;
    var id=data.id;
    
    var htmlTemp=
    `<html>
    <body>
    <h1>learning server side javascript
    <hr color=red>
    Name : ${name}
    <br>
    Age : ${age}
    <br>
    Mail-id : ${id}
    <hr color=red>
    </body>
    
    </html>`;
    return htmlTemp;
}






var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


var names=[];
app.get('/submit-name', function (req, res) {
    var name=req.query.name;
    names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
  
  res.sendFile(path.join(__dirname,'ui','article-one.html'));
  
  });
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});
app.get('/article-three', function (req, res) {
  res.send(createTemplate(articleThree));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
