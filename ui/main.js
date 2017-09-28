console.log('Loaded!');
var a=10;
var img1=document.getElementById("one");
console.log(a);
function tt(){
    a=a+10;
    img1.style.height = "'"+a+"px"+"'";
}
img1.onclick=function(){
    var interval=setInterval(tt,5);
};
