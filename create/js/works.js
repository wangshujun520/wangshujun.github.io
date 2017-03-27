
//选项卡
var btns = document.getElementsByClassName("btns");
var arr = ["move1","move2","apper"];
var numSelect = ["oneSelect","twoSelect","threeSelect","fourSelect","fiveSelect"];
var ol = document.getElementById("selectContent");
var li = ol.getElementsByTagName("li");
for( var i = 0 ;  i < btns.length ; i++ ){
    btns[i].index = i;
    btns[i].onclick = function(){
        var sp = document.getElementsByClassName(numSelect[this.index]);
        if( btns[this.index].style.background != "red" ){
            for( var j = 0 ;  j < btns.length ; j++ ){
                btns[j].style.background = "#fff";
                btns[j].style.color = "#000";
            }
            btns[this.index].style.background = "red";
            btns[this.index].style.color = "#fff";
            for( var m = 0 ; m < li.length ; m++ ){
                li[m].style.display = "none";
            }

            for( var z = (this.index * 8) ; z < ((this.index + 1) * 8) ; z++ ){
                // console.log(z)
                var num = rand(0,2);
                console.log(num);
                li[z].style.display = "block";
                li[z].className = arr[num];
            }
        }
    }
}


function rand(min,max){
    return parseInt(Math.random() * (max - min + 1) + min);
}


var timer = null;
for( i = 0 ; i < li.length ; i ++ ){
    li[i].onmouseenter = function(){
        var shadow = this.getElementsByClassName("shadow")[0];
        var rows = this.getElementsByClassName("row");

        shadow.style.display = "block";
//		btnAnimate(rows,0.1);
        for( var j = 0 ; j < rows.length ; j++ ){

            rows[j].className = "row col" + (j+1) + " app" + (j+1);

        }

    }
    li[i].onmouseleave = function(){
        var shadow = this.getElementsByClassName("shadow")[0];
        var rows = this.getElementsByClassName("row");
        shadow.style.display = "none";
        for( var j = 0 ; j < rows.length ; j++ ){
            rows[j].className = "row col" + (j+1) + " dis" + (j+1);
        }
//		btnAnimate(rows,-0.1);
    }
}