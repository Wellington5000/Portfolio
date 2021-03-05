import React from 'react'
import './projects.css'
import imageLogo from '../../logo192.png'
import imageHomePharmacy from '../../images/projeto 1/home.JPG'
import imageRobotAuction from '../../images/projeto 1/robot.JPG'

const Projects = () => {
  return (
    <div id="projects">
      <h2>Projects</h2>
      <section className="grid grid-template-columns">
        <a href="#pharmacy">
          <div className="item">
            <img src={imageHomePharmacy} alt="" />
            <h3>Pharmacy</h3>
          </div>
        </a>
        <a href="#virtualStore">
          <div className="item">
            <img src='https://user-images.githubusercontent.com/56002729/103154491-5902c980-4776-11eb-8af9-9edbc3ab77fc.JPG' alt="" />
            <h3>Virtual Store</h3>
          </div>
        </a>
        <a href="#robotAuction">
          <div className="item">
            <img src={imageRobotAuction} alt="" />
            <h3>Robot Auction</h3>
          </div>
        </a>
        <div className="item">
          <img src='https://image.freepik.com/vetores-gratis/jovem-usando-o-computador-na-mesa-trabalhando-ilustracao-online_24877-69117.jpg' alt="" />
          <h3>Virtual Store</h3>
        </div>
        <div className="item">
          <img src='https://image.freepik.com/vetores-gratis/homem-novo-feliz-que-trabalha-no-laptop-para-pesquisar-trabalhos-autonomos-no-computador-usando-a-internet-ilustracao-desenhado-a-mao-do-estilo_76775-293.jpg' alt="" />
          <h3>Virtual Store</h3>
        </div>
        <div className="item">
          <img src={imageLogo} alt="" />
          <h3>Virtual Store</h3>
        </div>
      </section>
    </div>
  )
}

export default Projects