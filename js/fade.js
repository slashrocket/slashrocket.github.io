    function scrollme(place){
if (location.pathname.replace(/^\//,'') == place.pathname.replace(/^\//,'') && location.hostname == place.hostname) {
                var target = $(place.hash);
                target = target.length ? target : $('[name=' + place.hash.slice(1) +']');
                if (target.length) {
                  $('html,body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
                }
              }
            };
$(document).on('scroll touchmove touchend', function(e) {
  var offTop = $(document).scrollTop();
  $('#hero').find('h1').css({
    marginTop: - (offTop * -1),
    opacity: (100 - (offTop * 0.2)) / 100
  });
  $('#hero').find('p').css({
    marginTop: - (offTop * 0.05),
    opacity: (100 - (offTop * 0.2)) / 100
  });
});
