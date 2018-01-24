$(document).ready(function(){
  var $window = $(window);
  var $menuBtn = $('.js-menu-btn');
  var $menuDropdown = $('.js-menu-dropdown');
  var $navWrap = $('.js-navigation-wrap');
  var $searchBtn = $('.js-search-btn');
  var $search = $('.js-search');
  var $homeSlider = $('.js-home-slider');
  var $homeVideoLink = $('.js-home-video-link');
  var $popupVideo = $('.js-popup-video');
  var $popupVideoSrc = $('.js-popup-video-src');
  var $popupVideoClose = $('.js-popup-video-close');

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
    console.log('heelo');
    $search.toggleClass('active');
  });
  $homeSlider.owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000
  });
  $homeVideoLink.on('click', function(){
    var url = $(this).data('url');
    $popupVideoSrc.attr('src', url);
    $popupVideo.addClass('active');
  });
  $popupVideoClose.on('click', function(){
    $popupVideo.removeClass('active');
    var src = $popupVideoSrc.attr('src');
    console.log(src);
    $popupVideoSrc.attr('src', src);
  });
});
