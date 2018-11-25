$(function() {
  $('.main-menu' ).hover(function() {
    $('.content').animate({ 'margin-left' : '25%' }, 0);
  }).mouseleave(function() {
    $('.content').animate({ 'margin-left' : '10%' }, 0);
  })
});
