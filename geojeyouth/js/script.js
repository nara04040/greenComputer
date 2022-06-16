// 모든 리소스가 준비가 되었는가?
// jquery (html , css , js)
// $(document).ready();
// vanila js (멀티미디어 요소 포함)
window.onload = function () {
  let sw_visual= new Swiper(".sw-visual" ,{
    spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".sw-visual-pg",
          clickable:true,
        },
  }) 
  // 일시멈춤 버튼
  // 현재상태저장
  let slide_now = 'ing';
  $('.sw-visual-bt').click(function(){
    if (slide_now == 'ing'){
      // 현재슬라이드 진행중이라면 슬라이드를 멈춰라
      slide_now = 'stop';
      sw_visual.autoplay.stop();
      $(this).find('span').text('play_arrow')
    }else {
      slide_now = 'ing'
      sw_visual.autoplay.start();
      $(this).find('span').text('pause')
    }
  })

  $('.sw-visual-bt').click(function(){
    $(this).toggleClass('sw-visual-bt-play');
    // 슬라이드 토글 시키기
    // 현재 슬라이드 상태
    let temp = $(this).hasClass('sw-visual-bt-play');
    if(temp){
      // 슬라이더 멈춤
      sw_visual.autoplay.stop()
    }else{
      // 슬라이더 재생
      sw_visual.autoplay.start()
    }
    
  })
}
