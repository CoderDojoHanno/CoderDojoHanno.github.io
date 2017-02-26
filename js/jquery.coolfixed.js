/*
*	
*	Cool Fixed jQuery Plugin
*	
*	fixed指定された要素(主にヘッダー)をスクロールに応じて、表示、非表示する
*	
*/
(function ($) {
  $.fn.coolfixed = function (config) {

    var defaults = {
      displayHeight: 10, // 上に隠れた際に表示させておく高さ
      dulay: 250,       // アニメーション速度
      easing: "swing",  // アニメーションイージング
      show: null,       // 要素が表示される際のイベント
      hide: null        // 要素が隠れる際のイベント
    }
    var options = $.extend(defaults, config);

    return this.each(function () {

      var target = $(this);
      var toggleHeight = target.height();
      var toggleBorder = toggleHeight - options.displayHeight;
      var defaultTop = parseInt($(this).css("top"));
      var flg = false;

      if ($(this).css("position") == "fixed") {

        // ScrollEvents
        $(window).scroll(function () {
          if ($(this).scrollTop() > toggleBorder) {
            if (!flg) {
              flg = true;
              target.stop().animate({ "top": "-" + toggleBorder + "px" }, options.dulay, options.easing);
              callFunction(options.hide);
            }
          }
          else {
            if (flg) {
              flg = false;
              target.stop().animate({ "top": defaultTop }, options.dulay, options.easing);
              callFunction(options.show);
            }
          }
        });

        // RollOut / RollOver Events
        $(this).hover(
          function () {
            if (flg) $(this).stop().animate({ "top": defaultTop }, options.dulay, options.easing);
          },
          function () {
            if (flg) $(this).stop().animate({ "top": "-" + toggleBorder + "px" }, options.dulay, options.easing);
          }
        );

      }

    });



		/*	Private Method
		----------------------------------------------------*/
    // Function Check And Call
    function callFunction(obj) {
      if (typeof obj == "function") {
        obj.call();
      }
    }


  }
})(jQuery);