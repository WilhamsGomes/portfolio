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

function openNav(){
  document.getElementById('navBar-responsivo').style.display='flex'
}

function closeNav(){
  document.getElementById('navBar-responsivo').style.display='none'
}
