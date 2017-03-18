$(function () {
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
});
