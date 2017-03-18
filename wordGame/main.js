function fontGame(){
	//获取元素对象
	var time = document.getElementById('time');
	var show = document.getElementById('show');
	var rule = document.getElementById('rule');
	var list = document.getElementById('list');
	var scoring = document.getElementById('scoring');
	var lis = document.getElementsByTagName('li');
	var num = 0;
	var timeBol = false;
	var count = 10;
	var clickBol = true;
	//预备文字和颜色数组
	var fonts = ["红", "绿", "蓝", "黄", "黑"];
    var colors =  ["red", "green", "blue", "yellow", "black"];
    
	//随机产生大字
	function showRand(){
        colorIndex = randFn(5);
        var fontIndex = randFn(5);
        show.style.color = colors[colorIndex];
        show.innerHTML = fonts[fontIndex];
	}
	//随机的方法
	function randFn(max){
		//随机获取从0~4
		return  parseInt(Math.random() * max);
	}
	//数组排重
	function removeRepeat(){
		var arr = [];         	
		//不知道次数就用while
        while(arr.length<5){   //等于5已经插满
           var rand = randFn(5);
           var bol = true;   //定义一个开关
           //使用循环进行数组排重
           for (var i = 0; i < arr.length; i++) {
           	  //如果重复那么将开关为false
           	  if (arr[i]==rand) {
           	  	bol = false;
           	  	break;
           	  }
           }	
           //如果开关值是真，就将随机数放入数组中
           if (bol) {
           	arr.push(rand);
           }
        }
        return arr;
	}
	//设置选项的文字与颜色
	function liRand(){
		var colorArr = removeRepeat();
		var fontArr = removeRepeat();
		//使用循环设置每个li的文字与颜色
		for (var i = 0; i < colorArr.length; i++) {
			lis[i].style.color = colors[colorArr[i]];
			lis[i].innerHTML = fonts[fontArr[i]];
			//给每个li定义个下标，与大字下标进行比较
			lis[i].index = fontArr[i];
		}
	}
	//开始选择
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick = function (){
			
			//判断点击的文字与大字的颜色是否相同
			if (this.index == colorIndex&&clickBol ) {
				timeBol = true;
				rule.style.opacity = 0;
				liRand();
				showRand();
				num++;
				scoring.innerHTML = "完成:"+num;
			}
		}
	}
	//计时
	var timer = setInterval(function(){
		if (timeBol) {
            count--;
            time.innerHTML = "剩余时间:"+count;
            if (count==0) {          	
            	clearInterval(timer);
            	timer = null;
            	clickBol = false;
            	//游戏结束
            	gameOver();
            }
		}
	},1000);
	function gameOver(){
		if (num<2) {
			alert("色盲级别！")
		}else if(num<5){
			alert("眼神还可以！")
		}else if (num<10){
			alert("牛逼！")
		}else{
			alert("非常牛逼")
		}
	}
	//初始化
	function init(){
		showRand();
		liRand();
	}
	init();
}
fontGame();