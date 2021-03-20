import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
      <h1>Recomendador de Bicicletas</h1>

      <img src="/home/bicycle.png" alt="Bicicleta" className="home__bicycle" />

      <span>¿Tienes dudas sobre qué bicicleta comprar?</span>
      <span>¡El Recomendador te responde!</span>

      <Link to="/recomendador" className="btn">
        Recomendador
      </Link>
    </div>
  );
}

export default Home;
