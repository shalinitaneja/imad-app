console.log('Loaded!');
var a=10;
var img1=document.getElementById('one');
function mm(){
    a=a+10;
    img.style.marginLeft=a+'px';
}
img1.onClick=function(){
    var interval=setInterval(mm,5);
};
