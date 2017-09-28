console.log('Loaded!');
var a=10;
function mm(){
    var img1=document.getElementById('one');
    img1.height= img1.height+10;
}
img1.onClick(function(){
    var interval=setinterval(mm,5);
});
