(function() {
  var $;
  $ = jQuery;
  $.fn.glitterGallery = function(fadeMilliseconds, waitMilliseconds, intervalMilliseconds) {
    var doFade, imageCount, images;
    if (fadeMilliseconds == null) {
      fadeMilliseconds = 1000;
    }
    if (waitMilliseconds == null) {
      waitMilliseconds = 2000;
    }
    if (intervalMilliseconds == null) {
      intervalMilliseconds = 1000;
    }
    images = this;
    imageCount = images.length;
    doFade = function() {
      var imgToFade, posToFade;
      posToFade = parseInt(Math.random() * imageCount);
      imgToFade = $(images[posToFade]);
      if (imgToFade.data('inProgress') === true) {
        return setTimeout(doFade, 1);
      } else {
        imgToFade.data('inProgress', true);
        imgToFade.animate({
          opacity: 0
        }, fadeMilliseconds, function() {
          var fadeIn;
          fadeIn = function() {
            return imgToFade.animate({
              opacity: 1
            }, fadeMilliseconds, function() {
              return imgToFade.data('inProgress', false);
            });
          };
          return setTimeout(fadeIn, waitMilliseconds);
        });
        return setTimeout(doFade, intervalMilliseconds);
      }
    };
    return doFade();
  };
}).call(this);
