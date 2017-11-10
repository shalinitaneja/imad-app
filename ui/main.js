var im=document.getElementById('madi');
var l=0;
function moveRight()
{
 l=l+1;
 im.style.marginLeft=l+'px';
 
}
im.onclick=function()
{
    //alert('hello');
  im.style.marginLeft='200px';
  var interval=setInterval(moveRight,50);
};



// for counter objects
var counter=0;
var button=document.getElementById('counter');
button.onclick=function()
{
 // alert('hello');
counter=counter+1;
//alert(counter);
 var abc=document.getElementById('count');
// abc.innerHtml=counter.toString();
  abc.innerHtml="hello";
};
   
   /* console.log("hello");
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
        }  */
//make the request
//request.open("GET","http://shalinitaneja1966.imad.hasura-app.io/counter",true);
//request.send(null); 
//};

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
            console.log(names);
          names=JSON.parse(names);
            var list="";
            for(var i=0;i<names.length;i++)
            {
                list += "<li>"+names[i]+"</li>";
            }
              var ul=document.getElementById('nameslist');
              ul.innerHTML=list;
    //        }
        }
    };
var nameInput=document.getElementById('name');
var name=nameInput.value;
//make the request
request.open("GET","http://shalinitaneja1966.imad.hasura-app.io/submit-name?name="+name,true);
request.send(null); 
};

