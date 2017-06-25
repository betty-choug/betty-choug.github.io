$(function() {
    // top导航栏
    $.ajax({
        url: 'http://127.0.0.1:9900/api/nav',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var res = template('topNavitem', data);
            // console.log(res);
            $('.header-nav .nav-list').html(res);
        }
    });

    // 购物车列表
    $('.top-header .topbar-cart').hover(function() {
        $('.cart-active').stop().slideDown();
    }, function() {
        $('.cart-active').stop().slideUp();
    });

    // 导航下拉框
    $('.header-nav .nav-item').hover(function() {
            alert(1);
            $('.header-menu').addClass('fadein');
        }, function() {
            $('.header-menu').css('display', 'none');
        })
        // 显示搜索结果
    $('.keyword').on('focus', function() {
        $('.search-list').show();
        $(this).parent().css('border-color', '#FF6700');
        $('.btn').css('border-color', '#FF6700');
    });
    $('.keyword').on('blur', function() {
        $('.search-list').hide();
        $(this).parent().css('border-color', '#ccc');
        $('.btn').css('border-color', '#ccc');
    });
})