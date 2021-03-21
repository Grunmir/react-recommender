import React from 'react';
import { useSpring, animated } from 'react-spring';

import { MEASURE } from '../../utils/recommender';

function RecommenderResult({ results }) {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

  function handleClick() {}

  return (
    <div className="recommender-result">
      <animated.h1 style={animation}>
        ¡Perfecto! Has completado todo el proceso¡
      </animated.h1>

      <animated.h2 style={animation}>
        Características de tu bicicleta ideal
      </animated.h2>

      <div className="recommender-result__list">
        {results.map((result) => (
          <li key={result.id}>
            <animated.span style={animation}>{result.text}</animated.span>

            {result.valueRank && (
              <animated.span style={animation}>
                {result.valueRank} {MEASURE[result.context].measure}
              </animated.span>
            )}
          </li>
        ))}
      </div>

      <div className="recommender-result__action">
        <animated.h2 style={animation}>
          ¿Quieres ver lo que tenemos para ti?
        </animated.h2>

        <div className="btn" onClick={handleClick}>
          <span>Ver los resultados</span>
        </div>
      </div>
    </div>
  );
}

export default RecommenderResult;
