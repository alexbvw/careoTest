// import logo from './logo.svg';
import './App.css';
import ListWidget from './ListWidget.js';

function App() {
  return (
    <div className="App">
      <header className="header">

       <span className='inner-header-left'>
          <h1>Put Forward</h1>
          <div className='numHolder'>
              <p>3</p>
          </div>
        </span>

        <div className='inner-header-right'>
          <span className='addIcon' onClick={() => alert('clicked')}>
            <img alt='' src='./add-icon.svg'></img>
          </span>
        </div>

      </header>

      <ListWidget></ListWidget>
    </div>
  );
}

export default App;
