
window.onload = function () {
  waterfall();
  // 滚动添加盒子
  window.onscroll = function () {
    // 条件
    if (update()) {
      //  造数据
      var data = {
        'dataImg':[{'img': "1.png"}, {'img': "6.png"}, {'img': "11.png"}, {'img': "17.png"}, {'img': "8.png"}, {'img': "21.png"}, {'img': "1.png"}, {'img': "14.png"}]
      }
      // 加载数据
      for (var i = 0; i < data.dataImg.length; i++) {
          // 创建盒子(外层)
          var newBox = document.createElement('div');
          newBox.className = "box";
          var wrap = document.getElementById('wrap');
          wrap.appendChild(newBox);
          // 创建盒子(内层)
          var newPiture = document.createElement('div');
          newPiture.className = 'pic';
          newBox.appendChild(newPiture);
          // 创建img
          var newImg = document.createElement('img');
          newImg.src = 'img_pbl/' + data.dataImg[i].img;
          newPiture.appendChild(newImg);
      }
        waterfall();
    }
  }
}
// 实现瀑布流
function waterfall() {
  // 获取父级盒子和子盒子
  var wrap = document.getElementById('wrap');
  var boxs = wrap.getElementsByClassName('box');
  // console.log(boxs.length);
  // 获取盒子的宽度
  var boxWidth = boxs[0].offsetWidth;
  // console.log(boxWidth);
  // 求取浏览器宽度
  var screenWidth = document.body.offsetWidth;
  // 用当前浏览器屏幕宽度/盒子的宽度 得到当前的列数
  var cols = parseInt(screenWidth/boxWidth);
  // 确定父级盒子的宽度
  // 父级盒子的宽度 == 盒子的宽度 * 当前的列数
  wrap.style.width = boxWidth * cols + "px";
  // console.log(wrap.style.width);
  // 让父级盒子居中
  wrap.style.margin = "0 auto";
  // 创建一个数组用于存放每列的高度
  var heightArr = [];
  // 遍历所有盒子
  for (var i = 0; i < boxs.length; i++) {
      var boxHeight = boxs[i].offsetHeight;
      if (i < cols) {
          // 第一行的盒子高度放入数组中
          heightArr.push(boxHeight);
      }else {
        // 获取当前数组中的最矮高度
        // var minBoxHeight = Math.min.apply(this, heightArr);
            var minBoxHeight = heightArr[0];
        for (var j = 0; j < heightArr.length; j++) {
            if (minBoxHeight > heightArr[j]) {
                minBoxHeight = heightArr[j];
            }
        }
        // 求出最矮高度对应的下标
        var minBoxIndex = geMinBoxIndex(minBoxHeight, heightArr);
        // 下一个盒子要摆放在当前最矮竖排下
        // 先将下一个盒子进行绝对定位
        boxs[i].style.position = "absolute";
        // 下一个盒子的向上偏移距离为当前最矮竖排的高度
        boxs[i].style.top = minBoxHeight + "px";
        // 下一个盒子的向左偏移距离为当前最矮竖排向左的偏移距离 == 盒子的宽度 * 当前最矮竖排对应的下标
        boxs[i].style.left = minBoxIndex * boxWidth + "px";
        // 关键 更新数组内最矮高度  然后回到循环重新判断最矮的高度
        heightArr[minBoxIndex] += boxHeight;
      }
  }
}
// 求出最矮竖排对应的下标的方法
function geMinBoxIndex(height, array) {
   for (var i in array) {
     if (height == array[i]) {
       return i;
     }
   }
}

function update() {
  var wrap = document.getElementById('wrap');
  var boxs = wrap.getElementsByClassName('box');
  // 取出最后一个盒子
  var lastBox = boxs[boxs.length - 1];
  // 求出最后一个盒子高度的一半 加上 最后一个盒子头部的偏移量
  var lastBoxDistance = lastBox.offsetHeight * 0.5 + lastBox.offsetTop;
  console.log('lastBoxDistance', lastBoxDistance);
  // 求取浏览器的高度
  var screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
  console.log('screenHeight', screenHeight);
  // 页面偏离屏幕的宽度
  var nowTop = document.body.scrollTop || document.documentElement.scrollTop;
  console.log('nowTop', nowTop);
  return lastBoxDistance <= screenHeight + nowTop;
}
