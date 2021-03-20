import React from 'react';

import Slider from 'rc-slider';

import { MEASURE } from '../../utils/recommender';

import 'rc-slider/assets/index.css';

function RecommenderAnswetRank({ answer, onClickAnswet }) {
  const { context, fromValue, toValue, step, text } = answer;
  const defaultValue = MEASURE[context].value;

  const [value, setValue] = React.useState(defaultValue);

  function handleClick() {
    onClickAnswet({ ...answer, valueRank: value });
  }

  function onChangeSlider(event) {
    setValue(event);
  }

  return (
    <div className="recommender-answet-rank">
      <p>{text}</p>

      <Slider
        className="recommender-answet-rank__slider"
        defaultValue={defaultValue}
        max={toValue}
        min={fromValue}
        onChange={onChangeSlider}
        step={step}
        value={value}
      />

      <p className="recommender-answet-rank__value">
        {value} {MEASURE[context].measure}
      </p>

      <div className="btn" onClick={handleClick}>
        <span>¡Listo!</span>
      </div>
    </div>
  );
}

export default RecommenderAnswetRank;
