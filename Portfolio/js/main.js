$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true
});

// // menu 상단 고정
window.onscroll = function(){scroll()};
var navbar = document.getElementById("HOME");
var sticky = navbar.offsetTop;
//offsetTop 속성은 offsetParent 요소의 맨 위를 기준으로 한 위쪽 위치 (픽셀 단위)를 반환한다.
function scroll() {
  if(window.pageYOffset >= sticky){
    navbar.setAttribute("class",'sticky')
    //navbar.classList.add('sticky)
  }else {
    navbar.setAttribute("class",'')
  //navbar.classList.remove('sticky)
  }
}

// slider opacity효과
$(document).ready(function(){
  $(".slider").animate({opacity:"1"},1500);
})

// 메뉴 클릭시 슬라이드 이동
$('.HOME').click(function(){
  $("html, body").animate({scrollTop:1},1000)
})
$('.FEATURES').click(function(){
  $("html, body").animate({scrollTop:1200},1000)
})
$('.TEAM').click(function(){
  $("html, body").animate({scrollTop:1700},1000)
})
$('.TESTIMONIALS').click(function(){
  $("html, body").animate({scrollTop:2300},1000)
  // $("html, body").animate({scrollTop:2400},1000)
})
$('.PRICING').click(function(){
  $("html, body").animate({scrollTop:5400},1000)
})
$('.CONTACT').click(function(){
  $("html, body").animate({scrollTop:6000},1000)
})



/* 이미지 클릭시 컨텐츠 보임
//콜백함수 : 어떠한 행위가 일어났을때, 어떤시점에서 발생하는 함수. 보통은 마지막쯔음 실행된다.
var imgTag = document.querySelectorAll('span.img');
  // console.log('imgTag 콘솔로 보기',imgTag);
// imgTag.addEventListener('click',function(){
//   imgTag.classList.add("on"); // 이벤트리스너에 click을 등록하고, 콜백함수를 실행
// });

// imgTag[0].addEventListener('click',function(){
//   imgTag[0].classList.add("on"); // 이벤트리스너에 click을 등록하고, 콜백함수를 실행
// });

// var i;
// for(let i=0; i<imgTag.length; i++){   // i값이 3일때 for문 종료
//   //i = 3
//   imgTag[i].addEventListener('click',function(){
//     console.log(imgTag[i].classList.add('on'))
//     // imgTag[i].classList.add("on");
//   });
// }
for(var i=0; i<imgTag.length; i++){   // i값이 3일때 for문 종료
 (function(i){
  imgTag[i].addEventListener('click',function(){
    imgTag[i].setAttribute("class",'img on')
    //    imgTag[i].classList.add('on)
  })
 })(i)
}
*/
/* fade효과 */
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".tg").each(function() {
      /* 원하는 각요소의 위치를 확인 */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* 요소가 window의 경계 내에 완전히 있다면, 그것을 fadein  */
      if(objectBottom < windowBottom){ /* object가 보임(스크롤다운) */
        if($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { // object가 보이지 않게된다(위로 스크롤).
        if($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //페이지로드시 scroll-hadler 호출
})