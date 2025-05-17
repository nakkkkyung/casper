//main.js

$(document).ready(function(){


//next_btn을 클릭하면 top3가 상단으로 애니메이션되면서 올라오게 한다.

  $('.next_btn').click(function(){
    //e.preventDefault();

    $('html, body').animate({scrollTop:$('#top3').offset().top-70},500, 'easeOutQuint');

    return false;
  });

//이벤트 무력화 방법
//a태그의 #때문에 클릭시 새로고침되는 현상이 발생되는데
//이런경우는 함수의 마지막에 return false를 넣어주는 방법과
//e(이벤트 객체)를 사용하여 e.preventDefault();를 작성해주는 방법이 있다.


// 이벤트 배너 구현
  const e_banner = $('.e_banner > ul');
  const c_btn = $('.e_banner .ctrl_btn span');
  let i = $('.e_banner .ctrl_btn span').index();
  let e_w = $('.e_banner').width(); //1200

  console.log(i); //0

  function moveLeft(){
    if(i==3){
      i=0;
    }else{
      i++;
    }
    let mv = -(e_w * i);
    console.log(mv); //-0 -1200, -2400, -3600
    e_banner.animate({'left':mv},500);

    c_btn.removeClass('act01'); //콘트롤버튼 서식 모두제거하고
    $('.ctrl_btn span').eq(i).addClass('act01'); //해당하는 콘트롤 버튼 서식에 적용.
  }

  //1. 콘트롤 버튼을 클릭하면 해당 이미지가 나오게
  c_btn.click(function(){ //콘트롤 버튼 클릭시

    i = $(this).index(); //해당 인덱스값을 변수에 담아서

    clearInterval(Timer); //자동으로 움직이는 것을 막는다.
    
    let mv = -(e_w * i);
    console.log(mv); //-0 -1200, -2400, -3600
    e_banner.animate({'left':mv},500,'easeOutElastic');

    c_btn.removeClass('act01');
    $(this).addClass('act01');
  });

  //2. 자동으로 움직이게 시간객체를 사용
  let Timer = setInterval(moveLeft, 3000);

  //3. 콘트롤 버튼에 클릭시 시간을 제거하여 멈추게하고 마우스 오버시 다시 시간을 재생하여 움직이게 한다.
  c_btn.mouseleave(function(){
    clearInterval(Timer);
    Timer = setInterval(moveLeft, 3000);
  });

});

$(document).ready(function () {
  function showOnScroll() {
    $('.scroll-section').each(function () {
      let sectionTop = $(this).offset().top;
      let scrollBottom = $(window).scrollTop() + $(window).height();

      if (scrollBottom > sectionTop + 100) {
        $(this).addClass('show');
      }
    });
  }

  // 최초 로드 시 체크
  showOnScroll();

  // 스크롤 시 체크
  $(window).on('scroll', function () {
    showOnScroll();
  });
});
