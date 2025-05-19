//캐릭터 슬라이드서식

new Swiper('.cha_con', {

	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 30, // 슬라이드간 간격
	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loopFillGroupWithBlank : true,

	loop : true, // 무한 반복

	pagination : { // 페이징
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

//마리오 뉴스
new Swiper(".info", {
                    
	slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
	spaceBetween : 60, // 슬라이드간 간격
	slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
	centeredSlides : true,
	// 그룹수가 맞지 않을 경우 빈칸으로 메우기
	// 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
	loopFillGroupWithBlank : true,

	loop : true, // 무한 반복

	pagination : { // 페이징
		el : '.swiper-pagination',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
	navigation : { // 네비게이션
		nextEl : '.swiper-button-next', // 다음 버튼 클래스명
		prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
	},
});

//스크롤시 리뷰 옆으로 나타나기
$(document).ready(function(){
	//모달 창
	$('.moda').hide();

	$('.swiper-slide .btn1').click(function(){
	$('.modal1').show();
	return false;
	});
	$('.swiper-slide .btn2').click(function(){
	$('.modal2').show();
	return false;
	});
	$('.swiper-slide .btn3').click(function(){
	$('.modal3').show();
	return false;
	});
	$('.swiper-slide .btn4').click(function(){
	$('.modal4').show();
	return false;
	});
	$('.swiper-slide .btn5').click(function(){
	$('.modal5').show();
	return false;
	});
	$('.swiper-slide .btn6').click(function(){
	$('.modal6').show();
	return false;
	});
	$('.swiper-slide .btn7').click(function(){
	$('.modal7').show();
	return false;
	});
	$('.swiper-slide .btn8').click(function(){
	$('.modal8').show();
	return false;
	});
	$('.swiper-slide .btn9').click(function(){
	$('.modal9').show();
	return false;
	});

	$('.moda .modal_wrap i.fa-plus').click(function(){
		$('.moda').hide();
	})

})



