import React from 'react';

import {Container} from './style';


import logo from '../../assets/img/logo.png';


const Home: React.FC = () => {
  return (
      <Container>
        <img src={logo} alt="Encontre seu mentor"/>
        <h1>Estamos preparando tudo por aqui 😄</h1>
        <p>Logo estaremos prontos para te recebe-lo, deixe seu e-mail avisarem assim que estivermos prontos.</p>
        <div className="input-group">
            <input name="email" id="email" placeholder="Digite aqui seu e-mail, protemenos que não vamos enviar spam"/>
            <button>Me avise =D</button>
        </div>
      </Container>
  );
}

export default Home;
