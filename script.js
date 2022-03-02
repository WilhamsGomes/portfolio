var typed = new Typed('#typed', {
    strings: [
        'Wilhams Gomes'
      ],
      typeSpeed: 150,
      cursorChar: '',
});

$('input').on('change', function() {
  $('body').toggleClass('blue');
});
