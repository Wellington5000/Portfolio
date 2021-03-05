import './about.css'

const About = () => {
  return (
    <div id="about">
      <h2>About me</h2>
      <div className="card1">
        <p>
          Sou um jovem desenvolvedor em <span className='highlightB'> ascensão </span>, adquirindo conhecimento de diferentes formas
          e da melhor maneira possível. Sou apaixonado por <span className='highlightB'>tecnologia e desafios</span>, 
          sempre procurando evoluir e aprender coisas novas.
        </p>
      </div>

      <div className="card2">
        <p>
          Atualmente cursando o 7º período em <span className='highlightB'>Ciência da Computação</span> na Universidade Estadual do Piauí - UESPI
          e tenho cursos de <span className='highlightY'>Governança em TI</span> pela Fundação Bradesco, <span className='highlightY'>Projetos Ágeis com SCRUM </span> pela Digital Innovation One, 
          <span className='highlightY'> Manutenção e Reparação de Computadores</span> pelo Instituto de Educação, Ciência e Tecnologia do Maranhão - IFMA e <span className='highlightY'> Excel Intermediário </span> 
           pela Fundação Bradesco.
        </p>
      </div>

      <div className="card3">
        <p>
          Minha principal área de estudo é o back-end com <span className='highlightB'>Node.js</span>, mas, me viro muito bem no front-end. Atualmente estudando 
          a biblioteca para front-end <span className='highlightB'>React.js</span> e integrações com Rest APIs com Node.js e o banco de dados não relacional <span className='highlightB'>MongoDB</span>. 
        </p>
      </div>
    </div>
  )
}

export default About