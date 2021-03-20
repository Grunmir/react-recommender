import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useSpring, animated } from 'react-spring';

import RecommenderAnswet from './RecommenderAnswet';
import RecommenderAnswetRank from './RecommenderAnswetRank';

function Recommender({ isPrevious, onClickAnswet, onClickPrevious, question }) {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      {isPrevious && (
        <div className="recommender__previous" onClick={onClickPrevious}>
          <ArrowBackIosIcon /> <span>Anterior</span>
        </div>
      )}

      <div className="recommender">
        {!isPrevious && <h1>Te ayudamos a elegir tu bicicleta ideal</h1>}

        <animated.h2 style={animation}>{question.text}</animated.h2>

        <div className="recommender__answet">
          {question.answers.map((answer) => (
            <div key={answer.id}>
              {answer.context ? (
                <RecommenderAnswetRank
                  answer={answer}
                  onClickAnswet={onClickAnswet}
                />
              ) : (
                <RecommenderAnswet
                  answer={answer}
                  onClickAnswet={onClickAnswet}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Recommender;
