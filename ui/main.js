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
        console.log("hi-1");
      //  if(request.readystate===XMLHttpRequest.DONE)
     //   {
            console.log("hi-2");
            if(request.status===200)
            {
            var cont=request.responseText;
            console.log("hi");
            var span=document.getElementById("count");
            span.innerHTML=cont.toString();
    //        }
        }
    };

//make the request
request.open("GET","http://shalinitaneja1966.imad.hasura-app.io/counter",true);
request.send(null); 
};

var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
  //  console.log("hello");
    // create a request object
    var request= new XMLHttpRequest();
    // capture the response
    request.onreadystatechange=function()
    {
       // console.log("hi-1");
      //  if(request.readystate===XMLHttpRequest.DONE)
     //   {
          //  console.log("hi-2");
            if(request.status===200)
            {
            var names=request.responseText;
            names=JSON.parse(names);
            var list="";
            for(var i=0;i<=names.length;i++)
            {
                list += "<li>"+names[i]+"</li>";
            }
              var ul=document.getElelementById('nameslist');
              ul.innerHTML=list;
    //        }
        }
    };
var nameInput=document.getElelemtById('name');
var name=nameInput.value;
//make the request
request.open("GET","http://shalinitaneja1966.imad.hasura-app.io/submit-name?name="+name,true);
request.send(null); 
};

