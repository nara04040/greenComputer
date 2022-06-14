$(document).ready(function () {
  // all menu pop-up
  let all_menu = $(".all-menu");
  let all_menu_wrapper = $(".all-menu-wrapper");
  let all_menu_close = $(".all-menu-close");
  all_menu.click(function () {
    all_menu_wrapper.addClass("all-menu-wrapper-active");
  });
  all_menu_close.click(function () {
    all_menu_wrapper.removeClass("all-menu-wrapper-active");
  });

  let sw_visual_start = $(".sw-visual-start");
  let sw_visual = new Swiper(".sw-visual", {
    autoplay: {
      delay: "2500",
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".sw-visual-control .sw-visual-pagination",
      clickable: true,
    },
    effect: "fade",
  });
  sw_visual_start.click(function () {
    $(this).toggleClass("sw-visual-stop");
    let temp = $(this).hasClass("sw-visual-stop");
    if (temp == true) {
      sw_visual.autoplay.stop();
      $(".sw-visual-start .material-icons").html("pause");
    } else {
      sw_visual.autoplay.start();
      $(".sw-visual-start .material-icons").html("navigate_next");
    }
  });
  let sw_banner = new Swiper(".sw-banner", {
    slidesPerView: 6,
    spaceBetween: 13,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".banner-forward",
      prevEl: ".banner-back",
    },
  });

  let banner_back = $(".banner-back");
  let banner_play = $(".banner-play");
  let banner_forward = $(".banner-forward");
  // let banner_stop = $(".banner-stop");

  banner_play.click(function () {
    $(this).toggleClass("banner-stop");
    let temp = $(this).hasClass("banner-stop");
    if (temp == true) {
      sw_banner.autoplay.stop();
      banner_play.addClass("banner-start");
    } else {
      sw_banner.autoplay.start();
      banner_play.addClass("banner-stop");
    }
  });
  banner_back.click(function () {
    let temp = banner_play.hasClass("banner-stop");
    if (temp == true) {
      banner_play.removeClass("banner-stop");
      sw_banner.autoplay.start();
    }
  });
  banner_forward.click(function () {
    let temp = banner_play.hasClass("banner-stop");
    if (temp == true) {
      banner_play.removeClass("banner-stop");
      sw_banner.autoplay.start();
    }
  });

  let go_top = $(".gotop");
  go_top.click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
