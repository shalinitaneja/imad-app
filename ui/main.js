console.log('Loaded!');
var a=10;
var img1=document.getElementById("madi");
console.log(a);
function tt(){
    a=a+10;
  //  img1.style.height = "'"+a+"px"+"'";
     img1.style.height = "300px";
    
}
img1.onclick=function(){
    var interval=setInterval(tt,5);
};
// for counter objects
var button=documnt.getElementById('counter');
button.onClick=function()
{
    // create a request object
    var request= new XMLHttpRequest();
    // capture the response
    request.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.done)
        {
            var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    };
};
//make the request
request.open('GET','http://http://shalinitaneja1966.imad.hasura-app.io/counter',true);
request.send('Null');

