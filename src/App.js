
import symbols from './symbols.svg';
import react from './react.svg';

import { init, setClass } from '@symbo.ls/init'
init()

function App() {
  const props = {
    maxWidth: 'J2',
    width: '100%',
    margin: '0 auto',

    header: {
      display: 'flex',
      padding: 'A B',
      flexAlign: 'center space-between'
    },

    logo: {
      boxSize: 'B1'
    }
  }

  return (
    <div className={setClass(props)}>
      <header className={setClass(props.header)}>
        <a
          href="https://docs.symbols.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={symbols} className={setClass(props.logo)} alt="Symbols logo" />
        </a>
        <p className={setClass(props.paragraph)}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={react} className={setClass(props.logo)} alt="React logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
