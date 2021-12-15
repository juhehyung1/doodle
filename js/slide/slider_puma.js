console.log("Script Load");

// 이미지 width값
const p_IMAGE_WIDTH = 785;

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
        const $p_banner = $('.puma .banner');
        console.log($p_banner);
        // banner
        const $p_wrap = $p_banner.children('.puma .banner-wrap');
        const $p_container = $p_wrap.children('.puma .banner-container');
        const $p_items = $p_container.children('.puma .banner-item');
        // Dot Nav
        const $p_dotNav = $p_banner.children('.puma .dot-nav');
        const $p_dot = $p_dotNav.find('span');
        // Paddle Nav
        const $p_paddleNav = $p_banner.children('.paddle-nav');
        console.log($p_paddleNav);
        const $p_btnPaddle = $p_paddleNav.find('button.arrow');
        const $p_btnPaddlePrev = $p_paddleNav.find('button.arrow.prev');
        const $p_btnPaddleNext = $p_paddleNav.find('button.arrow.next');

        

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
            max = $p_items.length; //아이템 갯수
        }

        // 이벤트 연결
        function addEvent() {
            $p_btnPaddle.on('click', handleClickPaddle)
            $p_dot.on('click', handleClickDot)
        }
        
        function handleClickPaddle(e) {
            e.preventDefault();
            // isAni true일 경우 뒤의 내용 막아줌
            if(isAni){
                return;
            }
            // 현재 이벤트가 발생된 요소 찾아옴
            const $p_el = $(e.currentTarget);

            if($p_el.is($p_btnPaddlePrev)){
                cuId -= 1; // 이전버튼 -1
                if(cuId < 0){
                    cuId = 0; // cuId가 0이하로 내려가지 않도록 (공백안나오도록)
                }
            } else if ($p_el.is($p_btnPaddleNext)){
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
            const left = `${(p_IMAGE_WIDTH * cuId) * -1}px`;
            // 움직이는 만큼 속도를 계산하기 위해 절대값(cuid - exid) x 시간  
            let duration =  300 + 100 * Math.abs(cuId - exId);;
            const easing = 'easeInSine'
            //                            style  duration
            $p_container.stop(true).animate({ left }, { duration, easing, complete: function() {
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
            const idx = $p_dot.index(this);
            // 활성화가 아닌 dot 눌렀을 때 변경
            if(exId !== idx){
                cuId = idx;
                sliderAnimation();
            }
            console.log(idx);
            console.log('dot');
        }

        function paddleActive() {
            $p_btnPaddlePrev.removeClass('disabled');
            $p_btnPaddleNext.removeClass('disabled');
            if (cuId === 0) {
                $p_btnPaddlePrev.addClass('disabled');
            } else if (cuId === max - 1) {
                $p_btnPaddleNext.addClass('disabled');
            }
        }

        function dotSelect(){
            $p_dot.removeClass('selected');
            // dot cuid값 받아와서 selected 적용 -> dot 활성화
            $p_dot.eq(cuId).addClass('selected');
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