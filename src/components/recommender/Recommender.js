import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useSpring, useTransition, animated } from 'react-spring';

import RecommenderAnswet from './RecommenderAnswet';
import RecommenderAnswetRank from './RecommenderAnswetRank';

function Recommender({ isPrevious, onClickAnswet, onClickPrevious, question }) {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
  const answers = useTransition(question.answers, (item) => item.id, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-40px,0)' },
  });

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
          {answers.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              {item.context ? (
                <RecommenderAnswetRank
                  answer={item}
                  onClickAnswet={onClickAnswet}
                />
              ) : (
                <RecommenderAnswet
                  answer={item}
                  onClickAnswet={onClickAnswet}
                />
              )}
            </animated.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Recommender;
