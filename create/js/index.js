var banners = document.getElementById('banner');
var ol = document.getElementById('bannerImg');
var Img = ol.getElementsByClassName('banner1');
var ul = document.getElementById("bannerBtn");
var ulBtn = ul.getElementsByTagName("li");

var num = 1 ;
var Bannertimer = null;
var timer = null;
function banner() {
    timer = setInterval(function(){
        ImgVary()
    },4000);

    function ImgVary(){

        Img[0].src = 'img/banner' + [num++] + '.jpg';

        if( num > 3){
            num = 1;
        }
        for( var i = 0 ; i < ulBtn.length ; i ++ ){
            ulBtn[i].style.background = "#fff";
        }
        ulBtn[num].style.background = "red";
        Img[1].src = 'img/banner' + num + '.jpg';
        Imgopacity(Img[0],0.02);
        Img[0].style.opacity = 1;

    }
    for( var i = 0 ; i < ulBtn.length ; i ++ ){
        ulBtn[i].index = i;
        ulBtn[i].onclick = function(){
            // num = this.index;
            Img[0].src = 'img/banner' + [this.index] + '.jpg';
            for( var j = 0 ; j < ulBtn.length ; j ++ ){
                ulBtn[j].style.background = "#fff";
            }
            ulBtn[this.index].style.background = "red";
        }
    }
    function Imgopacity(obj,speed){
        Bannertimer = setInterval(function(){

            obj.style.opacity -= speed;
            if(obj.style.opacity <= 0){
                obj.style.opacity = 0;
                clearInterval(Bannertimer);
            }
        },20)
    }
    banners.onmouseover = function () {
        clearInterval(timer)
        timer = null;
    }
    banners.onmouseout = function () {
        banner();
    }
}
banner();

//对图像灰色处理
function designGray() {
    var gray = document.getElementsByClassName('gray');
    for( var i = 0 ; i < gray.length ; i++ ){
        gray[i].onmouseover = function () {
            this.className = '';
        }
        gray[i].onmouseout = function () {
            this.className = "gray"
        }
    }
}
designGray();
