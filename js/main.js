$(function () {
  // メニューボタン
  $("#js-menu-button").on("click", function () {
    $("#js-main-menu").slideToggle();
    $("#js-menu-button").toggleClass("menu-button-open");
  });
});
// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
		var speed = 800;
		var headerH = $('#Header').height();
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top - headerH - 10;
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});
})