console.log('Loaded!');
var a=10;
var img1=document.getElementById('one');
function mm(){
    
    img1.style.marginLeft= img1.style.marginLeft+10+"px";
}
img1.onClick=function(){
    var interval=setinterval(mm,5);
};
