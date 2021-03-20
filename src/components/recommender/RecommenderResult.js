import React from 'react';

import { MEASURE } from '../../utils/recommender';

function RecommenderResult({ results }) {
  function handleClick() {}

  return (
    <div className="recommender-result">
      <h1>¡Perfecto! Has completado todo el proceso¡</h1>
      <h2>Características de tu bicicleta ideal</h2>

      {results.map((result) => (
        <li key={result.id}>
          <span>{result.text}</span>

          {result.valueRank && (
            <span>
              {result.valueRank} {MEASURE[result.context].measure}
            </span>
          )}
        </li>
      ))}

      <div className="recommender-result__action">
        <h2>¿Quieres ver lo que tenemos para ti?</h2>

        <div className="btn" onClick={handleClick}>
          <span>Ver los resultados</span>
        </div>
      </div>
    </div>
  );
}

export default RecommenderResult;
