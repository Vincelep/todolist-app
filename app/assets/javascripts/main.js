// document.addEventListener("turbolinks:load", function() {
//  alert("ok!")
// });

// $(function(){
//   $(".card").hide(function(){
//     $(".container").click(function(){
//       $(".card").show()
//     });
//   });
// });


// $(function(){
//   $(".rounded-circle").toggle(function(){
//     $(".nav-link")
//   });
// });

$(() => {
  // tabs
  let tab_content = $('.tab_content')

  tab_content.slice(1, tab_content.length).hide()

  $('.tab_link').on( "click", function() {
    tab_content.hide()
    $(this).next().slideDown('slow')
  });

  // dropdown
  $('button.navbar-toggler').on("click", function() {
    $('#navbarTogglerDemo03').hasClass('collapse') ? $('#navbarTogglerDemo03').removeClass("collapse") : $('#navbarTogglerDemo03').addClass('collapse');
  });
});
