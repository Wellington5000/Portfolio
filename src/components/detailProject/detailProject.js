import React from 'react'

import './detailProject.css'
import imageHomePharmacy from '../../images/projeto 1/home.JPG'
import imageRobotAuction from '../../images/projeto 1/robot.JPG'

const DetailProject = () => {
  return (
    <div>
      <div id='pharmacy' className='detailProject'>
        <h1>Pharmarcy</h1>
        <h3>Interface simples e intuitiva</h3>
        <img src={imageHomePharmacy} alt=""/>

        <h3>Senhas criptografadas e autenticação via JsonWebToken</h3>
        <img src="https://user-images.githubusercontent.com/56002729/102714802-f8741800-42af-11eb-9a13-fd47f26afacd.JPG" alt=""/>

        <h3>Venda com imagens dos produtos ao lado</h3>
        <img src="https://user-images.githubusercontent.com/56002729/102715003-2efe6280-42b1-11eb-8070-021b4ebe409e.JPG" alt=""/>

        <h3>Relatório de vendas com filtros de busca</h3>
        <img src="https://user-images.githubusercontent.com/56002729/102715092-adf39b00-42b1-11eb-9b88-be6c72204fb5.JPG" alt=""/>
      </div>

      <div id='virtualStore' className='detailProject'>
        <h1>Virtual Store</h1>
        <h3>Interface clean e moderna</h3>
        <img src='https://user-images.githubusercontent.com/56002729/103154491-5902c980-4776-11eb-8af9-9edbc3ab77fc.JPG' alt=""/>

        <h3>Lista de categorias e produtos em destaque</h3>
        <img src="https://user-images.githubusercontent.com/56002729/103154482-51dbbb80-4776-11eb-9ad8-d5885bab0b7b.JPG" alt=""/>

        <h3>Detalhamento completo dos itens</h3>
        <img src="https://user-images.githubusercontent.com/56002729/103154483-52745200-4776-11eb-9f75-35a192192c76.JPG" alt=""/>

        <h3>Uso de machine learning na recomendação de produtos</h3>
        <img src="https://user-images.githubusercontent.com/56002729/103154482-51dbbb80-4776-11eb-9ad8-d5885bab0b7b.JPG" alt=""/>
      </div>

      <div id='robotAuction' className='detailProject'>
        <h1>Robot Auction</h1>
        <h3>Um robô que efetua lances em leilão virtual automaticamente, usando automação no navegador</h3>
        <img src={imageRobotAuction} alt=""/>

      </div>
    </div>

  )
}

export default DetailProject