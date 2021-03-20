import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import RecommenderAnswet from './RecommenderAnswet';
import RecommenderAnswetRank from './RecommenderAnswetRank';

function Recommender({ isPrevious, onClickAnswet, onClickPrevious, question }) {
  return (
    <>
      {isPrevious && (
        <p className="recommender__previous" onClick={onClickPrevious}>
          <ArrowBackIosIcon /> <span>Anterior</span>
        </p>
      )}

      <div className="recommender">
        {!isPrevious && <h1>Te ayudamos a elegir tu bicicleta ideal</h1>}

        <h2>{question.text}</h2>

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
