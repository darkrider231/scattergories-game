import './App.css';
import Categories from './categories/Categories';
import Letter from './letter/Letter';
import Timer from './timer/Timer';

function App() {

  return (
    <div className="App">
      <div className='App-Section-One'>
      <Letter />
      <Timer />
      </div>

      <div className='App-Section-Two'>
      <Categories />
      </div>
    </div>
  );
}

export default App;
