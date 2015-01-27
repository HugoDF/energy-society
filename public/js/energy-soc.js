$(document).ready(function(){
  $('.section, .full-height').css({minHeight:$(window).height()-52});
  $(window).resize(function(){
    $('.section, .full-height').css({minHeight:$(window).height()-52});
  });
});