$(function() {

  /* Forwards */

  $('#goto-level-2').click(function() {
    $('.viewport').removeClass('current-1').addClass('current-2');
  });

  $('#goto-level-3').click(function() {
    $('.viewport').removeClass('current-2').addClass('current-3');
  });

  /* Backwards */

  $(document).on('click', '.current-2 .title-1', function() {
    $('.viewport').removeClass('current-2').addClass('current-1');
  });


  $(document).on('click', '.current-3 .title-2', function() {
    $('.viewport').removeClass('current-3').addClass('current-2');
  });
});