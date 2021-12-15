$(function () {
    var $fendi= $('.fendi');
    var $samsung= $('.samsung');
    var $puma= $('.puma');
 
    var $offset = 700;

    // offset 값으로 주게 되면 영역이 끝난 다음 애니메이션 작동 되서 적당히 빼줌
    var $fendiOST = $fendi.offset().top - $offset;
    var $samsungOST = $samsung.offset().top - $offset;
    var $pumaOST = $puma.offset().top - $offset;
  

    // window 스크롤 함수
    $(window).scroll(function () {
        // overview_Section
        if ($(this).scrollTop() > $fendiOST) {
            $fendi.find('h2').addClass('animate_inleft');
        }

        if ($(this).scrollTop() > $samsungOST) {
            $samsung.find('h2').addClass('animate_inright');
        }
        if ($(this).scrollTop() > $pumaOST) {
            $puma.find('h2').addClass('animate_inleft');
        }

    });

});
