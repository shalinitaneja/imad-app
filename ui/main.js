// for counter objects
var button=document.getElementById('counter');
button.onclick=function()
{
    console.log("hello");
    // create a request object
    var request= new XMLHttpRequest();
    // capture the response
    request.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
            var cont=request.responseText;
            var span=document.getElementById("count");
            span.innerHTML=cont.toString();
            }
        }
    };

//make the request
request.open("GET","http://shalinitaneja1966.imad.hasura-app.io/counter",true);
request.send(null); 
};

