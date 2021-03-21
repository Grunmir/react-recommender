import React from 'react';
import { useToasts } from 'react-toast-notifications';

import Recommender from '../components/recommender/Recommender';
import RecommenderResult from '../components/recommender/RecommenderResult';
import { getQuestion } from '../services/questions';

function RecommenderContainer() {
  const { addToast } = useToasts();
  const initQuestionId = 1;
  const [question, setQuestion] = React.useState(undefined);
  const [questions, setQuestions] = React.useState([]);
  const [isFinished, setIsFinished] = React.useState(false);
  const [results, setResults] = React.useState([]);

  async function getData(id) {
    try {
      const data = await getQuestion(id);
      setQuestion(data);
      setQuestionsPushPop(data);
    } catch (error) {
      addToast('Error en la solicitud', { appearance: 'error' });
    }
  }

  function onClickAnswet(answet) {
    const { linkedQuestionId } = answet;
    setResultsPushPop(answet);

    if (linkedQuestionId) {
      setQuestion(undefined);
      getData(linkedQuestionId);
    } else {
      setIsFinished(true);
    }
  }

  function onClickPrevious() {
    const newQuestions = setQuestionsPushPop();
    setResultsPushPop();
    setQuestion(undefined);

    setTimeout(() => {
      setQuestion(newQuestions[newQuestions.length - 1]);
    }, 50);
  }

  function setQuestionsPushPop(data = undefined) {
    let newQuestions = [...questions];

    if (data) {
      newQuestions.push(data);
    } else {
      newQuestions.pop();
    }

    setQuestions(newQuestions);
    return newQuestions;
  }

  function setResultsPushPop(data = undefined) {
    let newResults = [...results];

    if (data) {
      newResults.push(data);
    } else {
      newResults.pop();
    }

    setResults(newResults);
  }

  React.useEffect(() => {
    getData(initQuestionId);
  }, []);

  return question ? (
    <>
      {isFinished ? (
        <RecommenderResult results={results} />
      ) : (
        <Recommender
          isPrevious={questions.length !== 1}
          onClickAnswet={onClickAnswet}
          onClickPrevious={onClickPrevious}
          question={question}
        />
      )}
    </>
  ) : null;
}

export default RecommenderContainer;
