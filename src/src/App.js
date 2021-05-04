import BoxArea from './components/BoxArea'
import Button from './components/Button'

import './App.css';
import Preview from './components/Preview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BoxArea>
          <Preview>つ</Preview>
          <Button>tsu</Button>
        </BoxArea>
      </header>
    </div>
  );
}

export default App;
