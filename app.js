$('.btn-register').on('click', function () {
  var targetOffset = $('section.registro').offset().top
  $(document.body).scrollTo(targetOffset, 600);
})
