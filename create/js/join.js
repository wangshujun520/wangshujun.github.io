
var more  = document.getElementsByClassName('more')[0];
more.onmouseenter = function(){
    this.style.background = "red";
    this.style.borderColor = "red";
    this.style.color = "#fff";
}
more.onmouseleave = function(){
    this.style.background = "#fff";
    this.style.borderColor = "#000";
    this.style.color = "#000";
}
more.onclick = function () {
    location.href = "http://www.okcygc.com/index.php?m=content&c=index&a=lists&catid=16"
}

//开关进行点击事件的处理
var add =document.getElementsByClassName("add");
var needsInfo = document.getElementsByClassName("needsInfo");
var recruitTxt = document.getElementsByClassName("recruitTxt");
var big = [false,false,false,false,false];
for( var i = 0 ; i < recruitTxt.length ; i++ ){
    recruitTxt[i].index = i;
    recruitTxt[i].onclick = function(){

        if( big[this.index] == false ){
            add[this.index].innerHTML = "-";
            needsInfo[this.index].style.display = "block";
            big[this.index] = true;
        }else{
            add[this.index].innerHTML = "+";
            needsInfo[this.index].style.display = "none";
            big[this.index] = false;
        }
    }
}



//添加移入移除事件
var needs = document.getElementsByClassName("needs");
for( var i = 0 ; i < add.length ; i++ ){
    recruitTxt[i].index = i;
    recruitTxt[i].onmouseenter = function(){
        for( var j = 0 ; j < add.length ; j++ ){
            needs[j].style.color = "#000";
            add[j].style.background = "red";
            add[j].style.color = "#fff";
        }
        needs[this.index].style.color = "red";
        add[this.index].style.background = "#fff";
        add[this.index].style.color = "red";
    }
    recruitTxt[i].onmouseleave = function(){
        for( var j = 0 ; j < add.length ; j++ ){
            needs[j].style.color = "#000";
            add[j].style.background = "red";
            add[j].style.color = "#fff";
        }
    }
}

//给地图添加店家事件时图片来回切换

var MapTxt = document.getElementById("MapTxt");
var Map1Txt = document.getElementById("Map1Txt");
var maps = document.getElementById("maps");
MapTxt.onclick = function(){
    this.style.background = "red";
    this.style.color = "#fff";
    Map1Txt.style.background = "#fff";
    Map1Txt.style.color = "#000";
    maps.src = "img/map.png";
}
Map1Txt.onclick = function(){
    this.style.background = "red";
    this.style.color = "#fff";
    MapTxt.style.background = "#fff";
    MapTxt.style.color = "#000";
    maps.src = "img/map1.png";
}