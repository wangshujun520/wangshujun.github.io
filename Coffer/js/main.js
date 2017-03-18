$(function () {
    oneAdd();
    //设置背景图高度等于可视高度
    var height = $(window).height();
    $('.hr').height(height);
    //获取鼠标坐标
    $(document).mousemove(function (e) {
        var y = e.pageY;
        if(y < 150){
            $("nav").addClass('head');
            $("nav").removeClass('hid')
        }else{
            $("nav").addClass('hid');
            $("nav").removeClass('head');
        }
    });
    //滚轮前事件
    $('.main').onepage_scroll({
        beforeMove:function () {
            oneRemove();
            twoRemove();
            threeRemove();
            fourRemove();
            fiveRemove();
        },
        //滚动后事件
        afterMove:function fn(index) {
            switch(index){
                case 1:
                    oneAdd();
                    break;
                case 2:
                    twoAdd();
                    break;
                case 3:
                    threeAdd();
                    break;
                case 4:
                    fourAdd();
                    break;
                case 5:
                    fiveAdd();
                    break;
            }
        },
        loop: false
    });

    //第一屏
    function oneAdd() {
        $('.zh').addClass('oneZh');
        $('.en').addClass('oneEn');
        $('.top').addClass('oneTop');
        $('.bottom').addClass('oneBottom');
        $('.coffee').addClass('oneCoffee');
    }
    function oneRemove() {
        $('.zh').removeClass('oneZh');
        $('.en').removeClass('oneEn');
        $('.top').removeClass('oneTop');
        $('.bottom').removeClass('oneBottom');
        $('.coffee').removeClass('oneCoffee');
    }
    //第二屏
    function twoAdd() {
        $('.font').addClass('twoFont');
        $('.history p').addClass('twoP');
        $('.small').addClass('twoSmali');
        $('.smaliMap span').addClass('twoSpan');
    }
    function twoRemove() {
        $('.font').removeClass('twoFont');
        $('.history p').removeClass('twoP');
        $('.small').removeClass('twoSmali');
        $('.smaliMap span').removeClass('twoSpan');
    }
    //第三屏
    function threeAdd() {
        $('.left1').addClass('l1');
        $('.left2').addClass('l2');
        $('.left3').addClass('l3');
        $('.right1').addClass('r1');
        $('.right2').addClass('r2');
        $('.right3').addClass('r3');
    }
    function threeRemove() {
        $('.left1').removeClass('l1');
        $('.left2').removeClass('l2');
        $('.left3').removeClass('l3');
        $('.right1').removeClass('r1');
        $('.right2').removeClass('r2');
        $('.right3').removeClass('r3');
    }
    //第四屏
    function fourAdd() {
        $('.f1').addClass('spin1');
        $('.f2').addClass('spin2');
        $('.f3').addClass('spin3');
        $('.f4').addClass('spin4');
        $('.f5').addClass('spin5');
        $('.f6').addClass('spin6');
    }
    function fourRemove() {
        $('.f1').removeClass('spin1');
        $('.f2').removeClass('spin2');
        $('.f3').removeClass('spin3');
        $('.f4').removeClass('spin4');
        $('.f5').removeClass('spin5');
        $('.f6').removeClass('spin6');
    }
    //第五屏
    function fiveAdd() {
        $('.word').addClass('five');
        $('.invite').addClass('five');
        $('.tel').addClass('five');
    }
    function fiveRemove() {
        $('.word').removeClass('five');
        $('.invite').removeClass('five');
        $('.tel').removeClass('five');
    }

});
