// Add class of 'ie11' if IE11
if(navigator.userAgent.match(/Trident.*rv:11\./)) {
  $('body').addClass('ie11');
}

$('.awards-container a:gt(0)').hide();

setInterval(function () {
  $('.awards-container a:first-child').fadeOut()
  .next('a')
  .fadeIn()
  .end()
  .appendTo('.awards-container');
}, 5000);
