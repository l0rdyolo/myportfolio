import { BrowserRouter , Route , Routes } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { MainMenu } from './components/MainMenu/MainMenu';
import { useState } from 'react';
import './App.scss';
import { About } from './components/About/About';

function App() {
  const [displayMeunMenu, setDisplayMainMenu] = useState();
  return (
    // <div className="App">
    //   {
    //     displayMeunMenu ?
    //       (<MainMenu />) :
    //       (<HomePage setDisplayMainMenu={setDisplayMainMenu} />)
    //   }
    // </div>
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />

      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
