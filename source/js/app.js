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
  var $adminBody = $('.js-admin-body');
  var $sidebar = $('.js-sidebar');
  var $sidebarToggle = $('.js-sidebar-toggle');
  var $sidebarDropdown = $('.js-sidebar-dropdown');
  var $sidebarBtn = $('.js-sidebar-btn');
  var $sidebarUser = $('.js-sidebar-user');
  var $adminLabel = $('.js-label');
  var $countTo = $('.js-count-number');

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
  $sidebarToggle.on('click', function(e){
    $(this).siblings().find('.js-sidebar-dropdown').slideUp(200);
    $(this).find('.js-sidebar-dropdown').slideToggle(200);
  });
  $sidebarDropdown.on('click', function(e){
    e.stopPropagation();
  });
  $sidebarBtn.on('click', function(){
    $sidebar.toggleClass('active');
    $sidebarUser.toggleClass('active');
    $adminBody.toggleClass('active');
  });
  $adminLabel.on('click', function() {
    $(this).addClass('admin-user__label--checked');
  });
  $countTo.countTo();
  $('.js-datepicker').datetimepicker({
    format: 'DD/MM/YYYY'
  });
});
