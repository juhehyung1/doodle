console.log("Script Load");

// 이미지 width값
const f_IMAGE_WIDTH = 785;

(function ($) {
    $(document).ready(function () {
        console.log('jQuery hi');


        let isAni =false;
        // 현재 인덱스
        let cuId = 0;
        // 이전 인덱스
        let exId = 0;
        let max = void 0; // undefined
        const _this = this;

        // Selector
        const $f_banner = $('.fendi .banner');
        console.log($f_banner);
        // banner
        const $f_wrap = $f_banner.children('.fendi .banner-wrap');
        const $f_container = $f_wrap.children('.fendi .banner-container');
        const $f_items = $f_container.children('.fendi .banner-item');
        // Dot Nav
        const $f_dotNav = $f_banner.children('.fendi .dot-nav');
        const $f_dot = $f_dotNav.find('span');
        // Paddle Nav
        const $f_paddleNav = $f_banner.children('.paddle-nav');
        console.log($f_paddleNav);
        const $f_btnPaddle = $f_paddleNav.find('button.arrow');
        const $f_btnPaddlePrev = $f_paddleNav.find('button.arrow.prev');
        const $f_btnPaddleNext = $f_paddleNav.find('button.arrow.next');

        

        //초기화 함수
        function init() {
            setting();
            addEvent();
            reset();
        }

        // 초기값 세팅
        function setting() {
            cuId = 0;
            exId = cuId;
            max = $f_items.length; //아이템 갯수
        }

        // 이벤트 연결
        function addEvent() {
            $f_btnPaddle.on('click', handleClickPaddle)
            $f_dot.on('click', handleClickDot)
        }
        
        function handleClickPaddle(e) {
            e.preventDefault();
            // isAni true일 경우 뒤의 내용 막아줌
            if(isAni){
                return;
            }
            // 현재 이벤트가 발생된 요소 찾아옴
            const $f_el = $(e.currentTarget);

            if($f_el.is($f_btnPaddlePrev)){
                cuId -= 1; // 이전버튼 -1
                if(cuId < 0){
                    cuId = 0; // cuId가 0이하로 내려가지 않도록 (공백안나오도록)
                }
            } else if ($f_el.is($f_btnPaddleNext)){
                cuId += 1; // 다음 버튼 1
                if(cuId > max -1){
                    cuId = max -1; // cuId가 5이상되지 않도록 (공백안나오도록)
                }
            }
            console.log(cuId);

            // exid가 cuid와 같지 않을 경우에만 slideranimation 적용
            if(exId !== cuId){
                sliderAnimation();
            }
        }

        function sliderAnimation(){
            if(!isAni){
                isAni = true;
            }
            paddleActive();
            dotSelect();
            // 이미지가 왼쪽으로 한 칸 움직어여하기 때문에 -1
            const left = `${(f_IMAGE_WIDTH * cuId) * -1}px`;
            // 움직이는 만큼 속도를 계산하기 위해 절대값(cuid - exid) x 시간  
            let duration =  300 + 100 * Math.abs(cuId - exId);;
            const easing = 'easeInSine'
            //                            style  duration
            $f_container.stop(true).animate({ left }, { duration, easing, complete: function() {
                // 완료된 시점에 다시 ani적용할 수 있도록 false
                isAni = false;
                // 변경한 후 index값 바꿔줌
                exId = cuId;
            }});
        }

        function handleClickDot(e) {
            e.preventDefault();
            if(isAni){
                return;
            }
            const idx = $f_dot.index(this);
            // 활성화가 아닌 dot 눌렀을 때 변경
            if(exId !== idx){
                cuId = idx;
                sliderAnimation();
            }
            console.log(idx);
            console.log('dot');
        }

        function paddleActive() {
            $f_btnPaddlePrev.removeClass('disabled');
            $f_btnPaddleNext.removeClass('disabled');
            if (cuId === 0) {
                $f_btnPaddlePrev.addClass('disabled');
            } else if (cuId === max - 1) {
                $f_btnPaddleNext.addClass('disabled');
            }
        }

        function dotSelect(){
            $f_dot.removeClass('selected');
            // dot cuid값 받아와서 selected 적용 -> dot 활성화
            $f_dot.eq(cuId).addClass('selected');
        }

        // 초기값 재설정
        function reset() {
            isAni = false;
            paddleActive();
            dotSelect();
        }

        init();
    });
})(jQuery);