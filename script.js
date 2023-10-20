var typed = new Typed('#typed', {
    strings: [
        'Wilhams Gomes'
      ],
      typeSpeed: 150,
      cursorChar: '',
});

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
  document.getElementById('gdstec').classList.remove('activeExperience')

  elemento = document.getElementById(nameId)
  elemento.classList.add('activeExperience')

  if(elemento.id == 'redeCidada'){
    document.getElementById("titulo-experiencia").innerHTML="Monitor"
    document.getElementById("periodo-experiencia").innerHTML="Maio de 2022 - Agosto de 2022 | Abril de 2023 - Agosto de 2023"
    document.getElementById("cargo-experiencia").innerHTML="Rede Cidadã/Start Recife by Accenture"
    document.getElementById("text-experiencia").innerHTML="Desempenhei o papel de monitor na Capacitação Full Stack, um programa oferecido pela Rede Cidadã/Start Recife em parceria com a Accenture, voltado para a formação de jovens. Minha responsabilidade era auxiliar os alunos na compreensão dos conteúdos do curso, que incluíam Lógica de Programação, MySQL, HTML, CSS, JavaScript, React.Js e Node.js. Este trabalho voluntário não só me proporcionou a oportunidade de contribuir para a formação de futuros profissionais da área de tecnologia, mas também enriqueceu meu próprio aprendizado e desenvolvimento pessoal. Foi uma experiência gratificante que me permitiu aplicar e expandir meus conhecimentos enquanto ajudava outros a fazer o mesmo."
  }

  if(elemento.id == 'etemb'){
    document.getElementById("titulo-experiencia").innerHTML="Desenvolvedor Back-end"
    document.getElementById("periodo-experiencia").innerHTML="Junho de 2019 - Setembro de 2019"
    document.getElementById("cargo-experiencia").innerHTML="ETE Miguel Batista"
    document.getElementById("text-experiencia").innerHTML="Atuei como Desenvolvedor Back-End no IV Sarau da ETE Miguel Batista. Fui um dos idealizadores do jogo 'Cannibal', o qual fazia uma homenagem ao vocalista Cannibal, da Banda Devotos do Ódio. O Game foi criado em Java, utilizando a IDE NetBeans e toda GUI Swing disponível."
    
  }

  if(elemento.id == 'singlePoint'){
    document.getElementById("titulo-experiencia").innerHTML="Desenvolvedor Full-Stack"
    document.getElementById("periodo-experiencia").innerHTML="Abril de 2022 - Outubro de 2022"
    document.getElementById("cargo-experiencia").innerHTML="Single Point Technology"
    document.getElementById("text-experiencia").innerHTML="Desempenhei o papel de Desenvolvedor Full Stack na Single Point Technology, onde utilizei uma variedade de tecnologias, incluindo JavaScript, Jquery, Java, Groovy e Oracle SQL. Essas ferramentas foram fundamentais para o desenvolvimento de novas funcionalidades em sistemas CRM, a resolução de bugs e a criação de regras de negócios personalizadas para atender às solicitações dos clientes. Além disso, tive a oportunidade de participar do desenvolvimento de uma plataforma que ajudou a empresa a cumprir as diretrizes da LGPD. Também contribuí para um projeto que envolvia a criação de sistemas de controle de estoque para grandes empresas farmacêuticas. Essas experiências ampliaram minha compreensão dos desafios e soluções no campo do desenvolvimento de software."
  }

  if(elemento.id == 'gizmidia'){
    document.getElementById("titulo-experiencia").innerHTML="Designer Gráfico"
    document.getElementById("periodo-experiencia").innerHTML="Agosto de 2021 - Março de 2022"
    document.getElementById("cargo-experiencia").innerHTML="Giz Midia"
    document.getElementById("text-experiencia").innerHTML="Atuei como Designer Gráfico na Agência Giz Midia. Minha função era produzir artes digitais de acordo com a solicitação de clientes ou para campanhas pré-estabelecidas. Utilizava o Adobe Photoshop para o desenvolvimento das peças."
  }

  if(elemento.id == 'gdstec'){
    document.getElementById("titulo-experiencia").innerHTML="Desenvolvedor Full-Stack"
    document.getElementById("periodo-experiencia").innerHTML="Dezembro de 2022 - Até o momento"
    document.getElementById("cargo-experiencia").innerHTML="GDS Tec"
    document.getElementById("text-experiencia").innerHTML="Atualmente, desempenho o papel de Desenvolvedor Full-Stack na GDS Tec, onde tenho a oportunidade de contribuir para a criação de novos produtos, tanto para a própria GDS quanto para a F12, uma empresa parceira. Minha experiência abrange o uso de várias tecnologias, incluindo React.js, Next.js, Vue.js, Python, .NET e NestJS, que são essenciais para o desenvolvimento dos projetos em que estou envolvido. Além disso, tive a chance de participar do desenvolvimento de dashboards, uma plataforma de apostas online e SASS. Esses produtos são comercializados externamente, ampliando ainda mais o impacto do meu trabalho."
  }


}
