$(document).ready(function(){
  var $window = $(window);
  var $menuBtn = $('.js-menu-btn');
  var $menuDropdown = $('.js-menu-dropdown');
  var $navWrap = $('.js-navigation-wrap');
  var $searchBtn = $('.js-search-btn');
  var $search = $('.js-popup-search');
  var $searchClose = $('.js-popup-search-close');
  var $registerBtn = $('.js-register-btn');
  var $register = $('.js-popup-register');
  var $registerClose = $('.js-popup-register-close');
  var $homeSlider = $('.js-home-slider');
  var $videoLink = $('.js-video-link');
  var $popupVideo = $('.js-popup-video');
  var $popupVideoSrc = $('.js-popup-video-src');
  var $popupVideoClose = $('.js-popup-video-close');
  var $bodyWrap = $('.js-body');
  var $sidebar = $('.js-sidebar');
  var $sidebarList = $('.js-sidebar-list');
  var $sidebarResponsive = $('.js-btn-responsive');

  $menuBtn.on('click', function(){
    $(this).toggleClass('active');
    $menuDropdown.slideToggle(400);
  });
  $window.scroll(function(){
    if ($window.scrollTop() > 25) {
      $navWrap.addClass('fixed');
    }
    else {
      $navWrap.removeClass('fixed');
    }
  });
  $searchBtn.on('click', function(){
    $search.addClass('active');
  });
  $searchClose.on('click', function(){
    $search.removeClass('active');
  });
  $registerBtn.on('click', function(){
    $register.addClass('active');
  });
  $registerClose.on('click', function(){
    $register.removeClass('active');
  });
  $homeSlider.owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000
  });
  $videoLink.on('click', function(){
    var url = $(this).data('url');
    console.log('helo');
    $popupVideoSrc.attr('src', url);
    $popupVideo.addClass('active');
  });
  $popupVideoClose.on('click', function(){
    $popupVideo.removeClass('active');
    var src = $popupVideoSrc.attr('src');
    console.log(src);
    $popupVideoSrc.attr('src', src);
  });
  $sidebarList.on('click', function() {
    $(this).find('.js-sidebar__small-menu').slideToggle();
  });
  $sidebarResponsive.on('click', function() {
    $bodyWrap.toggleClass('body--active');
    $sidebar.toggleClass('sidebar--active');
  });
});
