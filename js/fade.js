    function scrollme(){
              if (this.location.pathname.replace(/^\//,'') == this.location.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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
    marginTop: - (offTop * 0.2),
    opacity: (100 - (offTop * 0.2)) / 100
  });
  $('#hero').find('p').css({
    marginTop: - (offTop * 0.05),
    opacity: (100 - (offTop * 0.2)) / 100
  });
});