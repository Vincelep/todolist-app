document.addEventListener("turbolinks:load", function() {
 alert("ok!")
});

$(function(){
  $(".card").hide(function(){
    $(".container").click(function(){
      $(".card").show()
    });
  });
});


$(function(){
  $(".rounded-circle").toggle(function(){
    $(".nav-link")
  });
});
