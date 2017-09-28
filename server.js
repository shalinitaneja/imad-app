var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var atricleTwo={
    title:"tile for article-two",
    heading:"ARTICLE TWO",
    date:"sept 25, 2017",
    content:`
    <p>first line of article two</p>
    <p>second line of article two</p>
    <p>third  line of article two</p>'
    };
    
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var data=data.date;
    var content=data.content;
    var htmlTemplate="<html> \
    <head><title> {title} </title> \
    </head>  \
    <body> \
    <div>  \
      <a href='/'>HOME</a>  \
    </div>   \
    <hr>   \
    <h3>${heading}</h3>   \
    <div>${date}</div>    \
    <div>${content}</div>  \
    </body>   \
    </html> ";
    return htmlTemplate;
}
    
    
    
    
    `


}

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
app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
