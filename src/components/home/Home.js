import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
      <h1>Recomendador de Bicicletas</h1>

      <div className="home__bicycle">
        <img id="bicycle" src="/home/bicycle.png" alt="Bicicleta" />
      </div>

      <span>¿Tienes dudas sobre qué bicicleta comprar?</span>
      <span>¡El Recomendador te responde!</span>

      <Link to="/recomendador" className="btn">
        Recomendador
      </Link>
    </div>
  );
}

export default Home;
