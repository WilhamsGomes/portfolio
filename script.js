var typed = new Typed('#typed', {
    strings: [
        'Wilhams Gomes'
      ],
      typeSpeed: 150,
      cursorChar: '',
});

// $('input').on('change', function() {
//   $('body').toggleClass('blue');
// });

function openNav(){
  document.getElementById('navBar-responsivo').style.display='flex'
}

function closeNav(){
  document.getElementById('navBar-responsivo').style.display='none'
}

function onActiveClass(nameId){

  document.getElementById('etemb').classList.remove('activeExperience')
  document.getElementById('redeCidada').classList.remove('activeExperience')
  document.getElementById('singlePoint').classList.remove('activeExperience')

  elemento = document.getElementById(nameId)
  elemento.classList.add('activeExperience')

  if(elemento.id == 'redeCidada'){
    document.getElementById("titulo-experiencia").innerHTML="Monitor"
    document.getElementById("periodo-experiencia").innerHTML="Maio de 2022 - Agosto de 2022"
    document.getElementById("cargo-experiencia").innerHTML="Rede Cidadã/Start Recife by Accenture"
  }

  if(elemento.id == 'etemb'){
    document.getElementById("titulo-experiencia").innerHTML="Desenvolvedor Back-end"
    document.getElementById("periodo-experiencia").innerHTML="Junho de 2019 - Setembro de 2019"
    document.getElementById("cargo-experiencia").innerHTML="ETE Miguel Batista"
  }

  if(elemento.id == 'singlePoint'){
    document.getElementById("titulo-experiencia").innerHTML="Desenvolvedor Full Stack"
    document.getElementById("periodo-experiencia").innerHTML="Abril de 2022 - Outubro de 2022"
    document.getElementById("cargo-experiencia").innerHTML="Single Point Technology"
  }


}
