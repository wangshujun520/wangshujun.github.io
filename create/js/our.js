//处理图片的来回放大
var ours = document.getElementsByClassName("ours");
var ourContentInfo = document.getElementById("ourContentInfo");
for( var i = 0 ; i < ours.length ; i ++ ){
    ours[i].index = i ;
    ours[i].onmouseenter = function(event){
        for( var j = 0 ; j < ours.length ; j ++ ){
            ours[j].style.width = "8%";
            ours[j].style.opacity = "0.4";
            ours[j].style.transform
        }
        ours[this.index].style.backgroundSize = "400% 100%";
        ours[this.index].style.width = "28%";
        ours[this.index].style.opacity = "1";
    }
    ours[i].onmouseleave = function(event){

        for( var j = 0 ; j < ours.length ; j ++ ){
            ours[this.index].style.backgroundSize = "1000%  100%";
            ours[j].style.width = "10%";
            ours[j].style.opacity = "0.4";
        }

    }
    ours[i].onclick = function(event){

        for( var j = 0 ; j < ours.length ; j ++ ){
            ours[j].style.display = "none";

        }
        ourContentInfo.style.display = "block";

    }
}

//给加号添加点击事件
var info = document.getElementsByClassName("info");
var infoTxt = document.getElementsByClassName("infoTxt");

for( var i = 0 ; i < info.length ; i ++ ){
    info[i].index = i;
    clickInfo(i);
}
function clickInfo(i){
    var timer = null;
    info[i].onclick = function(){
        var _this = this;
        clearInterval(timer);
        this.innerHTML == "+" ? this.innerHTML = "-" : this.innerHTML = "+";
        timer = setInterval(function(){
            if( _this.innerHTML == "+"  ){
                infoTxt[_this.index].style.height = infoTxt[_this.index].offsetHeight - 1  + "px";
                if( infoTxt[_this.index].offsetHeight <= 0 ){
                    infoTxt[_this.index].style.height = 0 + "px";
                    clearInterval(timer);
                }
            }else{
                infoTxt[_this.index].style.height = infoTxt[_this.index].offsetHeight + 1 + "px";
                if( infoTxt[_this.index].offsetHeight >= 500 ){
                    infoTxt[_this.index].style.height = 500 + "px";
                    clearInterval(timer);
                }
            }
        },5)
    }
}

//添加点击事件返回上一层
var all = document.getElementsByClassName("all");
for( var i = 0 ; i < all.length ; i ++ ){
    all[i].onclick = function(){
        for( var j = 0 ; j < ours.length ; j ++ ){
            ours[j].style.display = "block";

        }
        ourContentInfo.style.display = "none";
    }
}

//
// $('.ours').hover(function(){
//    $(this).css({
//        'animation':'imgHoverbig1 1s ease both'
//    })
//     $(this).siblings().css({
//         'animation':'imgHoversmall1 1s ease both'
//     })
// },function(){
//     $(this).css({
//         'animation':'imgHoverbig2 1s ease both'
//     })
//     $(this).siblings().css({
//         'animation':'imgHoversmall2 1s ease both'
//     })
// })