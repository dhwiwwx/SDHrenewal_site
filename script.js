$(document).ready(function () {
  $(".lv1").mouseenter(function () {
    $(this).find(".lv2").stop().slideDown();
  })
  $(".lv1").mouseleave(function () {
    $(this).find(".lv2").stop().slideUp();
  })
  var cnt = 1;
  var margin_T0P = -728;
  setInterval(function () {
    $('.slideWrap>ul').animate({ 'margin-top': margin_T0P * cnt }, function () {
      if (cnt !== 2) {
        cnt++;
      } else {
        cnt = 0;
      }
    })
  }, 3000)
})