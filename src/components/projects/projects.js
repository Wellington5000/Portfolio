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
      </section>
    </div>
  )
}

export default Projects