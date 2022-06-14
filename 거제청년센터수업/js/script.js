$(document).ready(function() {
  let sw_visual_start = $('.sw-visual-start');
  let sw_visual = new Swiper(".sw-visual", {
    autoplay: {    
      delay: "2500",
      disableOnInteraction: false,
    },
    loop:true,
    effect: "fade",
    pagination: {
      el: ".sw-visual-control .sw-visual-pagination",
      clickable: true,
    },
  });

  sw_visual_start.click(function(){
    $(this).toggleClass('sw-visual-stop');
    let temp = $(this).hasClass('sw-visual-stop');
    if(temp == true){
      sw_visual.autoplay.stop();
      $('.sw-visual-start .material-icons').html('navigate_next')
    }else {
      sw_visual.autoplay.start();
      $('.sw-visual-start .material-icons').html('pause')
    }
  })

  // banner slide
  

  // gotop
  let go_top = $('.gotop');
  go_top.click(function(){
    $('html, body').animate({
      scrollTop:0,
    })
  })

})
