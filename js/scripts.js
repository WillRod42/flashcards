$(document).ready(function(){
  $(".card-body").click(function(){
    $(this).children().toggleClass("display");
  });

  $(".btn-next").click(function() {
    $(".main-card").next(".card").toggleClass("main-card");
    $(".main-card:first").toggleClass("main-card");

    if ($(".main-card").length <= 0) {
      $(".card:first").addClass("main-card");
    }
  });

  $(".btn-prev").click(function() {
    $(".main-card").prev(".card").toggleClass("main-card");
    $(".main-card:last").toggleClass("main-card");

    if ($(".main-card").length <= 0) {
      $(".card:last").addClass("main-card");
    }
  });
});