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
  document.getElementById('gizmidia').classList.remove('activeExperience')

  elemento = document.getElementById(nameId)
  elemento.classList.add('activeExperience')

  if(elemento.id == 'redeCidada'){
    document.getElementById("titulo-experiencia").innerHTML="Monitor"
    document.getElementById("periodo-experiencia").innerHTML="Maio de 2022 - Agosto de 2022"
    document.getElementById("cargo-experiencia").innerHTML="Rede Cidadã/Start Recife by Accenture"
    document.getElementById("text-experiencia").innerHTML="Atuei como monitor na formação de jovens na Capacitação Full Stack, oferecida pela Rede Cidadã/Start Recife em parceria com a Accenture. Minha função era auxiliar os alunos a compreenderem os conteúdos do curso, entre eles Lógica de Programação, MySQL, HTML, CSS, JavaScript, React.Js e Node.js"
  }

  if(elemento.id == 'etemb'){
    document.getElementById("titulo-experiencia").innerHTML="Desenvolvedor Back-end"
    document.getElementById("periodo-experiencia").innerHTML="Junho de 2019 - Setembro de 2019"
    document.getElementById("cargo-experiencia").innerHTML="ETE Miguel Batista"
    document.getElementById("text-experiencia").innerHTML="Atuei como Desenvolvedor Back-End no IV Sarau da ETE Miguel Batista. Fui um dos idealizadores do jogo 'Cannibal', o qual fazia uma homenagem ao vocalista Cannibal, da Banda Devotos do Ódio. O Game foi criado em Java, utilizando a IDE NetBeans e toda GUI Swing disponível."
    
  }

  if(elemento.id == 'singlePoint'){
    document.getElementById("titulo-experiencia").innerHTML="Desenvolvedor Full Stack"
    document.getElementById("periodo-experiencia").innerHTML="Abril de 2022 - Outubro de 2022"
    document.getElementById("cargo-experiencia").innerHTML="Single Point Technology"
    document.getElementById("text-experiencia").innerHTML="Atuei como Desenvolvedor Full Stack na empresa Single Point Technology. Utilizei JavaScript, Jquery, Java, Groovy e Oracle SQL para o desenvolvimento de novas funcionalidades em sistemas CRM, resolução de bugs e criação de regras de negócios a partir da solicitação de clientes."
  }

  if(elemento.id == 'gizmidia'){
    document.getElementById("titulo-experiencia").innerHTML="Designer Gráfico"
    document.getElementById("periodo-experiencia").innerHTML="Agosto de 2021 - Março de 2022"
    document.getElementById("cargo-experiencia").innerHTML="Giz Midia"
    document.getElementById("text-experiencia").innerHTML="Atuei como Designer Gráfico na Agência Giz Midia. Minha função era produzir artes digitais de acordo com a solicitação de clientes ou para campanhas pré-estabelecidas. Utilizava o Adobe Photoshop para o desenvolvimento das peças."
  }


}
