$( document ).ready(function() {
  $(".arrow").click(function(){
    $("body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 800);
  });
});