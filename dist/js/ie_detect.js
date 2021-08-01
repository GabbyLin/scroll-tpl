(function () {
    'use strict';

    $(function () {
      // Get IE or Edge browser version
      var version = detectIE();

      if (version === false) {
        // alert('not IE/Edge');
        $('body').removeClass('forIE');
      } else if (version >= 12) {
        // alert('Edge ' + version);
        $('body').addClass('forIE');
      } else if (version < 12 && version >= 11) {
        // alert('IE ' + version);
        $('body').addClass('forLowIE');
        $('.IE_bg').css("height", function () {
          return window.innerHeight;
        });
        $('.centerLayer').css({
          "top": (window.innerHeight - $('.centerLayer').height()) / 2,
          "left": (window.innerWidth - $('.centerLayer').width()) / 2
        });
      } else {
        alert("您的瀏覽器版本不支援，請升級瀏覽器！");
      } // console.log(window.navigator.userAgent);

      /**
       * detect IE
       * returns version of IE or false, if browser is not Internet Explorer
       */


      function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');

        if (msie > 0) {
          // IE 10 or older => return version number
          return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');

        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');

        if (edge > 0) {
          // Edge (IE 12+) => return version number
          return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        } // other browser


        return false;
      }
    });

}());
