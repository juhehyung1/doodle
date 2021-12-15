var cntWd, sldWd, tb;
	$(function() {
		
        //container의 innerwidth (가로 길이)
		cntWdV = $('#container_various').innerWidth();
        cntWdC = $('#container_countries').innerWidth();

        //thumbs 호출 () - left로 움직임
		tbV = $('#thumbs_various');
        tbC = $('#thumbs_countries');

        // 움직여야하는 총 가로 길이
		sldWdV = tbV.outerWidth();
        sldWdC = tbC.outerWidth();

		
        //container_various에서 마우스 움직일 때 발생하는 이벤트
		$('#container_various').mousemove(function(e)
		{
			tbV.css({left: (cntWdV - sldWdV )*(e.pageX / cntWdV) + "px" });
            //tumbs_various css left가 움직임
            // 화면에서 가로 길이(cntwd) - 전체 가로 길이 * 마우스 움직임에 따른 가로축 / 화면 가로 길이 -> 왼쪽 움직임 구함
            // 움직여야 할 가로 길이 * 
            // 왼쪽으로 움직여야하기 때문에 - 값이 나와야함
 		});
         
         $('#container_countries').mousemove(function(e)
         {
             tbC.css({left: (cntWdC - sldWdC )*(e.pageX / cntWdC) + "px" });
          });

});