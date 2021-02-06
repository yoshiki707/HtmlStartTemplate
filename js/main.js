$(function () {
  // メニューボタン
  $("#js-menu-button").on("click", function () {
    $("#js-main-menu").slideToggle();
    $("#js-menu-button").toggleClass("menu-button-open");
  });
});
