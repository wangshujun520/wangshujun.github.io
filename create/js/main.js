//顶部导航栏的处理

window.onscroll = function(){
    //这是一个数组
    var nav = document.getElementsByTagName("nav")[0];
    //设置滚动高度，并且做兼容处理
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    if( top <= 0 ){
        toTop.className = "nofade";
        nav.style.background = "";
    }
    if( top >= 100 ){
        toTop.className = "fadede";
        nav.style.background = "#000";
    }
}


//侧边栏qq微信的处理
var erweima = document.getElementById("erweima");
var contactOur = document.getElementById('contactOur')
var contactImg = contactOur.getElementsByTagName("img");
for(var i = 0;i<contactImg.length;i++){
    contactImg[i].onmouseover = function () {
        this.className = "gray";
    }
    contactImg[i].onmouseout = function () {
        this.className = "";
    }
    contactImg[1].onmouseover = function () {
        this.className = "gray";
        erweima.style.display = "block";
    }
    contactImg[1].onmouseout = function () {
        this.className = "";
        erweima.style.display = "none";
    }
}


//底部图片的悬浮
var cooperateLogo = document.getElementsByClassName("cooperateLogo");
    for( var i = 0 ; i < cooperateLogo.length ; i ++ ) {
        cooperateLogo[i].onmouseover = function () {
            var reg = "2.";
            this.src = this.src.replace(reg, "1.");
        }
        cooperateLogo[i].onmouseout = function () {
            var reg = "1.";
            this.src = this.src.replace(reg, "2.");
        }
    }
