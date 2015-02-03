function eqCols(identifierString){
  var max=0;
  var id = identifierString+' .column';
  $(id).each(
    function(){
      $(this).css({'height':''});
      var h = $(this).outerHeight();
      if(h>max){
        max = h;
      }
    });
  $(id).outerHeight(max);
}
function grabcommitteeMemberData(identifierString){
  var name = $(identifierString).find('.name.title').html();
  var position = $(identifierString).find('.position').html();
  var imageSrc = $(identifierString).find('.profile-picture').css('background-image');
  var description = $(identifierString).find('.description').html();
  var website = $(identifierString).find('.website').html();
  var url = '//' + website;
  var obj = {
    'name': name,
    'position': position,
    'imageSrc': imageSrc,
    'description': description,
    'website': website,
    'url': url
  }
  return obj;
}
function insertcommitteeMemberData(identifierString, data){
  $(identifierString+' .title.name').html(data.name);
  $(identifierString+' .position').html(data.position);
  $(identifierString+' .profile-picture').css('background-image', data.imageSrc);
  $(identifierString+' .description').html(data.description);
  $(identifierString+' .website').html(data.website).attr('href', data.url);
}
$(document).ready(function(){
  $('.section, .full-height').css({minHeight:$(window).height()-52});
  $('.square').each(function(){$(this).height($(this).width());});
  $('.aspect-ratio').each(function(){$(this).height($(this).width()*13/10);});
  $(window).resize(function(){
    $('.section, .full-height').css({minHeight:$(window).height()-52});
    $('.square').each(function(){$(this).height($(this).width());});
    $('.aspect-ratio').each(function(){$(this).height($(this).width()*13/10);});
  });
  if($('.committee').length>0 && $(window).width()>768){
    var data = grabcommitteeMemberData('.committee-member-link:first-child');
    insertcommitteeMemberData('#interactive-display', data);


    eqCols('#interactive-display');
    setTimeout(function(){
      $('#default-display').addClass('no-opacity');
      setTimeout(function(){
        $('#interactive-display').addClass('opaque').removeClass('invisible');
      }, 1010);  
    }, 50);

    $('.committee-member-link').on('click',function(e){
      e.preventDefault();
      var data = grabcommitteeMemberData(this);
      
      $("html, body").animate({ scrollTop: "0"});
      $('#interactive-display').removeClass('opaque');
      setTimeout(function(){
        insertcommitteeMemberData('#interactive-display', data);

        eqCols('#interactive-display');
        $('#interactive-display').addClass('opaque');
        }, 510);
    });
    $(window).resize(function(){
      eqCols('#interactive-display');
    });
  }
});