
import logo from './logo.svg';
import { Box, Img, SymbolsProvider, SymbolsContext } from '@symbo.ls/react'
import { useContext } from 'react'

const editor = {
  remote: true,
  async: true,
  serviceRoute: 'state',
  endpoint: 'api.symbols.dev'
}

const designSystem = {
  theme: {
    document: {
      background: 'black',
      color: 'white'
    },
  },
  color: {
    britishBlue: '#0A4C8B',
  }
}

const Header = () => {
  const { state } = useContext(SymbolsContext)
  console.log(state)
  return <>
    <Img src={logo} />
    <h1>{state?.main?.title}</h1>
  </>
}

const Squad = () => {
  const { state } = useContext(SymbolsContext)
  return state?.squad?.data.map(v => <h3>{v.name}</h3>)
}

function App() {
  return (
    <SymbolsProvider appKey="byld.symbo.ls" editor={editor} designSystem={designSystem}>
      <div className="App">
        <Header/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Squad />
        
        <Box background="britishBlue" padding="A B" round="A">
          Learn React
        </Box>
      </div>
    </SymbolsProvider>
  );
}

export default App;
