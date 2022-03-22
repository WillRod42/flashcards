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

  $(".btn-show-all").click(function() {
    $(".card").addClass("main-card");
    $(".btn-prev").addClass("display");
    $(".btn-next").addClass("display");
    $(".btn-hide").removeClass("display");
    $(this).addClass("display");
  });

  $(".btn-hide").click(function() {
    $(".card").removeClass("main-card");
    $(".card:first").addClass("main-card");
    $(".btn-prev").removeClass("display");
    $(".btn-next").removeClass("display");
    $(".btn-show-all").removeClass("display");
    $(this).addClass("display");
  });
});