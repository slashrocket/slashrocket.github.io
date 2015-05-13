$(document).on('scroll touchmove touchend', function(e) {
  var offTop = $(document).scrollTop();
  $('#hero').find('h1').css({
    marginTop: - (offTop * 0.2),
    opacity: (100 - (offTop * 0.2)) / 100
  });
  $('#hero').find('p').css({
    marginTop: - (offTop * 0.05),
    opacity: (100 - (offTop * 0.2)) / 100
  });
});