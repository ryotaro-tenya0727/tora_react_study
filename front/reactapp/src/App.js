import React, { useState, useEffect, useCallback } from 'react';

import './assets/styles/style.css';
import { AnswersList, Chats, FormDialog } from './components/index';
import { db } from './firebase/index';

const App = () => {
  //クラスコンポーネントのthisは定義された場所で決まる。
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
    addChats({ text: nextDataset.question, type: 'question' });

    setAnswers(nextDataset.answers);

    setCurrentId(nextQuestionId);
  };

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case nextQuestionId === 'contact':
        handleClickOpen();
        break;
      case /^https:*/.test(nextQuestionId):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:
        //必ず次の手順を踏む。setStateの中で直接{chats: this.state.chats.push(chat)};はNG
        addChats({ text: selectedAnswer, type: 'answer' });

        setTimeout(
          () => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]),
          500
        );
        break;
    }
  };

  const addChats = (chat) => {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    // console.log('componentDidMount');
    (async () => {
      const initDataset = {};
      await db
        .collection('questions')
        .get()
        .then((response) => {
          response.forEach((doc) => {
            // console.log(doc.id);
            const id = doc.id;
            const data = doc.data();
            initDataset[id] = data;
          });
        });
      setDataset(initDataset);
      displayNextQuestion(currentId, initDataset[currentId]);
    })();
  }, []);

  useEffect(() => {
    // console.log('componentDidUpdate');
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        <FormDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default App;
