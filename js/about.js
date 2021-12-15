$(function () {
    var $snsTitle = $('.sns_star');
    var $color = $('.color');
    var $saying = $('.saying');
    var $offset = 700;

    // offset 값으로 주게 되면 영역이 끝난 다음 애니메이션 작동 되서 적당히 빼줌
    var $snsTitleOST = $snsTitle.offset().top - $offset;
    var $colorOST = $color.offset().top - $offset;
    var $sayingOST = $saying.offset().top - $offset;

    // window 스크롤 함수
    $(window).scroll(function () {
        // overview_Section
        if ($(this).scrollTop() > $snsTitleOST) {
            $snsTitle.find('h1').addClass('animate_inleft');
            $snsTitle.find('p').addClass('animate_fadein');
        }

        if ($(this).scrollTop() > $colorOST +200) {
            $color.find('h1').addClass('animate_inright');
            $color.find('p').addClass('animate_fadein');
        }
  
        if ($(this).scrollTop() > $sayingOST +400) {
            $saying.find('h1').addClass('animate_scalebig');
            // $color.find('p').addClass('animate_fadein');
        }
    });

});

$(document).ready(function () {
    var $horizontal = $('.about_slidemove');
    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();
        scrollPercent = (s / (d - c));
        var position = (- scrollPercent * ($(document).width()));

        $horizontal.css({"transform": "translate3d(" + position + "px, 0px, 0px)"});
    });
  });