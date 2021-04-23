import { useState } from 'react';
import './App.css';
import Categories from './categories/Categories';
import Letter from './letter/Letter';
import Timer from './timer/Timer';

function App() {
  const [hide, setHide] = useState(true);

  return (
    <div className="App">
      <div className='App-Section-One'>
      <Letter />
      <Timer setHide={setHide}/>
      </div>

      <div className='App-Section-Two'>
      <Categories  hide={hide} setHide={setHide}/>
      </div>
    </div>
  );
}

export default App;
