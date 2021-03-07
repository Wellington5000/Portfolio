import React from 'react'
import './presentation.css'

const Presentation = () => {
  return (
    <div id="presentation" className='presentation'>
      <p className="presentationText">
        Olá, meu nome é <span className='highlightB'>Wellington </span><br />
        e esta é a página com meu portifólio!
        <br /><br />
        Sou <span className='highlightB'>apaixonado </span> por tecnologia
        e desafios, <br />
        sempre buscando <span className='highlightB'> aprender </span> coisas novas <br />
        e me <span className='highlightB'> qualificando </span> pessoal e profissionalmente.
      </p>
      <img src='https://image.freepik.com/vetores-gratis/jovem-usando-o-computador-na-mesa-trabalhando-ilustracao-online_24877-69117.jpg' alt="" />
    </div>
  )
}

export default Presentation