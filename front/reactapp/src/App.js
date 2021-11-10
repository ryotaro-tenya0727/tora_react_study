import React, { useEffect } from 'react';
// import { fetch } from './components/Todo';
import './App.css';
import { Article } from './components/Todo';

function App() {
  // useEffect(() => {
  //   (async () => {
  //     let a = await fetch();
  //     console.log(a);
  //   })();
  // }, []);
  return (
    <>
      <Article title={'ほにたん'} content={'ウルム'} />
    </>
  );
}

export default App;
