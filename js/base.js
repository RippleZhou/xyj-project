(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
            console.log(docEl.style.fontSize);
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
    console.log(docEl.style.fontSize);
})(document, window);



$(function(){
    //月赛导航显示隐藏条
    $('td.month_show').click(function(){
        if($('td.month_show>div').hasClass('month-dis')){
            $('td.month_show>div').slideDown().removeClass('month-dis').addClass('month-show');
        }else if($('td.month_show>div').hasClass('month-show')){
            $('td.month_show>div').slideUp().removeClass('month-show').addClass('month-dis');
        }
    });

    $('#first-xyj').click(function(event) {
        /* Act on the event */
        $('#show-firstmonth').removeClass('dsn').siblings().addClass('dsn');
        $('.container_month td span').removeClass('container_current');
        $('#show-monthWeek span').addClass('container_current');
        $('td.month_show').children('img').attr("src","./img/First-month.png");
        $('#show-firstmonth').find('div.show').eq(3).removeClass('dsn').siblings().addClass('dsn');

    }); 
    $('#second-xyj').click(function(event) {
        /* Act on the event */
        $('#show-secondmonth').find('div.show').eq(3).removeClass('dsn').siblings().addClass('dsn');
        $('#show-monthWeek span').addClass('container_current').parents().siblings().children('span').removeClass('container_current');
        $('#show-secondmonth').removeClass('dsn').siblings().addClass('dsn');
        $('td.month_show').children('img').attr("src","./img/Second-month.png");
    });    
    $('#third-xyj').click(function(event) {
        /* Act on the event */
        console.log(111)
        $('#show-thirdmonth').removeClass('dsn').siblings().addClass('dsn');
        $('#show-thirdmonth').find('div.show').eq(1).removeClass('dsn').siblings().addClass('dsn');
        $('#show-secondWeek span').addClass('container_current').parents().siblings().children('span').removeClass('container_current');
        $('td.month_show').children('img').attr("src","./img/Third-month.png");
    });


    //点击每周的按钮时添加当前按钮的效果
    $('.container_month td').click(function(){
        var $this=$(this);
        if($this.children('span.container_going').hasClass('container_current')){
            $this.children('span.container_going').removeClass('container_current');
            return;
        }
        $this.children('span.container_going').addClass('container_current').parents('td').siblings().children('span.container_going').removeClass('container_current'); 
    });


    //1点击每一期，切换到相应的期数 给其他的页面display:none 当前页面display:block;
    //1.1 判断用户选择的是哪一期，根据点击的id进行跳转

    //2 然后点击周赛切换到相应每周的排名页面
    // 给其他的页面display:none 当前页面display:block;

    $('#show-firstWeek').click(function() {
        /* Act on the event */
        $('td.month_show>div').slideUp().removeClass('month-show').addClass('month-dis');
        $('#show-firstmonth').find('div.show').eq(0).removeClass('dsn').siblings().addClass('dsn');
        $('#show-secondmonth').find('div.show').eq(0).removeClass('dsn').siblings().addClass('dsn');
        $('#show-thirdmonth').find('div.show').eq(0).removeClass('dsn').siblings().addClass('dsn');
    });    
    $('#show-secondWeek').click(function() {
        /* Act on the event */
        $('td.month_show>div').slideUp().removeClass('month-show').addClass('month-dis');
        $('#show-firstmonth').find('div.show').eq(1).removeClass('dsn').siblings().addClass('dsn');
        $('#show-secondmonth').find('div.show').eq(1).removeClass('dsn').siblings().addClass('dsn');
        $('#show-thirdmonth').find('div.show').eq(1).removeClass('dsn').siblings().addClass('dsn');
    });    
    $('#show-thirdWeek').click(function() {
        /* Act on the event */
        $('td.month_show>div').slideUp().removeClass('month-show').addClass('month-dis');
        $('#show-firstmonth').find('div.show').eq(2).removeClass('dsn').siblings().addClass('dsn');
        $('#show-secondmonth').find('div.show').eq(2).removeClass('dsn').siblings().addClass('dsn');
    }); 
    $('#show-monthWeek').click(function() {
        /* Act on the event */
        $('td.month_show>div').slideUp().removeClass('month-show').addClass('month-dis');
        $('#show-firstmonth').find('div.show').eq(3).removeClass('dsn').siblings().addClass('dsn');
        // $('#show-thirdmonth').find('div.show').eq(3).removeClass('dsn').siblings().addClass('dsn');
    });
})
