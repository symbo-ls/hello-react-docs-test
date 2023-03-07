
import logo from './logo.svg';
import { Box, Img, SymbolsProvider, Button, SymbolsContext } from '@symbo.ls/react'
import { useContext } from 'react'

const editor = {
  remote: true,
  async: true,
  // serviceRoute: 'state',
  endpoint: 'api.symbols.dev'
}

const designSystem = {
  useReset: true,
  useSvgSprite: true,
  useFontImport: true,
  useIconSprite: true,
  globalTheme: true,
  useDocumentTheme: true,
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

function App() {
  return (
    <SymbolsProvider appKey="byld.symbo.ls" editor={editor} designSystem={designSystem}>
      <div className="App">
        <Header/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Box background="britishBlue" padding="A B" round="A">
          Learn React
        </Box>
      </div>
    </SymbolsProvider>
  );
}

export default App;
