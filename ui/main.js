console.log('Loaded!');
var a=10;
var img1=document.getElementById("one");
function mm(){
    a=a+10;
    img1.style.height="'"+a+"px+"'";
}
img1.onclick=function(){
    var interval=setInterval(mm,5);
};
