import React from 'react';

function RecommenderAnswet({ answer, onClickAnswet }) {
  function handleClick() {
    onClickAnswet(answer);
  }

  return (
    <div className="btn" onClick={handleClick}>
      <span>{answer.text}</span>
    </div>
  );
}

export default RecommenderAnswet;
