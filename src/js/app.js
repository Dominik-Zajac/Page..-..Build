//     *~* Hamburger menu *~*

//Disable menu after click on <a>
$('.toggle-menu a').on('click', function (e) {
  $('.toggle').toggleClass('toggle-active');
  $('.navicon').toggleClass('navicon-active');

});

//Active/disable hamburger menu
$('.navicon').on('click', function (e) {
  e.preventDefault();

  $(this).toggleClass('navicon-active');
  $('.toggle').toggleClass('toggle-active');
});
