import React, { useEffect } from 'react';
import { fetch } from './components/Todo';
import './App.css';

function App() {
  useEffect(() => {
    (async () => {
      let a = await fetch();
      console.log(a);
    })();
  }, []);
  return <div className='App'>test</div>;
}

export default App;
