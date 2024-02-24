import { HomePage } from './components/HomaPage/HomePage';
import { MainMenu } from './components/MainMenu/MainMenu';
import { useState } from 'react';
import './App.scss';

function App() {
  const [displayMeunMenu, setDisplayMainMenu] = useState();
  return (
    <div className="App">
      {
        displayMeunMenu ?
          (<MainMenu />) :
          (<HomePage setDisplayMainMenu={setDisplayMainMenu} />)
      }
    </div>
  );
}

export default App;
