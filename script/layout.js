//layout.js

$(document).ready(function(){
    //1.모달 변수 생성하기
    const modal = `
    <div class='modal'>
        <div class='inner'>
            <a href="#" title=""><img src="./images/modal_img.png" alt=""></a>
            <p>
                <input type="checkbox" id="ch"><label for="ch">오늘 하루 열지 않음</label>
                <input type="button" value="CLOSE" id="c_btn">
            </p>
        </div>
    </div>
    `;
    //모달변수를 body의 맨 뒤쪽에 출력한다.
    $('body').append(modal);

    //쿠키생성하기
    let ch=$('.modal #ch');//체크박스 변수

    //현재 브라우저에 쿠키정보가 있는지 없는지 유무를 판단하여 모달이 나오지않게함
    if($.cookie('popup')=='none'){
    $('.modal').hide();
    };

    //쿠키의 존재 유무를체크하여 쿠키를 생성하거나 모달윈도 숨기기
    function closeModal(){
    if(ch.is(':checked')){//만약에 체크박스에 체크가 된 상태라면
        //쿠키를 생성하기
        $.cookie('popup','none',{expires:1,path:'/'});

    }
    //체크박스에 체크 안한 경우 그냥 모달 숨기기
    $('.modal').hide();
    };
    //닫기 버튼을 클릭하며 closeModal함수 실행하여 쿠키생성하고 모달 숨기기 한다.

    $('.modal #c_btn').click(function(){
    closeModal();
    });

    // $('.gnb').mouseenter(function(){
    //     $('header img').animate({'right':'0px'},200)
    // })

    //스크롤시 헤더 고정
    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        console.log(sPos);
        
        if(sPos>=1100){
            $('header img').animate({'right':'-300px'},100)
            $('header').css('background','#f00')
            $('header>h1, .gnb li a').css('color','#fff')
            $('header>h1>a').css({
                'color':'#fff',
                'border':'4px solid #fff'
            })

        }else{
            $('header img').animate({'right':'0px'},100)
            $('header').css('background','#fff')
            $('.gnb li a').css('color','#333')
            $('header>h1>a').css({
                'color':'#f00',
                'border':'4px solid #f00'
            });
        }
    });

    function scroll_btn(){
        $('.next_btn').animate({'bottom':'6%'},800).animate({'bottom':'4%'},800)
    }
    let Timer2 = setInterval(scroll_btn,1000);//매 1.6초마다 함수를 반복실행한다.


    $('.next_btn').click(function(){
        $('html,body').animate({scrollTop:$('#history').offset().top-18},400)
        return false;
    })

    /*메뉴 클릭시 해당섹션이동*/ 
    let gnb=$('.gnb li');
    gnb.click(function(){

        let i=$(this).index()+1;
        let d=$(this).index()+2;
        console.log(i); //2,3,4,5,6...

        if(i<=2){
            $('html,body').animate({scrollTop:$('main section').eq(i).offset().top-15},400,'easeOutCubic');
            return false;
    
        }else{
            $('html,body').animate({scrollTop:$('main section').eq(d).offset().top-65},400,'easeOutCubic');
            return false;
        }

    });

    let menu=$('.gnb>li>a')
    menu.click(function(){
        $(this).animate({'text-decoration':'underline'});
        $(this).siblings().removeClass();
    })
    });

