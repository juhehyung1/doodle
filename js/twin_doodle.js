$(function () {
    var $twin= $('.twin');
 
    var $offset = 800;

    // offset 값으로 주게 되면 영역이 끝난 다음 애니메이션 작동 되서 적당히 빼줌
    var $twinOST = $twin.offset().top - $offset;
 

    // window 스크롤 함수
    $(window).scroll(function () {
      
        if ($(this).scrollTop() > $twinOST) {
            $twin.find('h2').addClass('animate_fadeinup');
        }

        if ($(this).scrollTop() > $twinOST +150) {
            $twin.find('h1').addClass('animate_fadeinup');
        }

        if ($(this).scrollTop() > $twinOST +300) {
            $twin.find('img').addClass('animate_fadein');
        }

        if ($(this).scrollTop() > $twinOST +500) {
            $twin.find('p').addClass('animate_fadein');
        }
    });

});
