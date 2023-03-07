
// import logo from './logo.svg';
import { Box, SymbolsProvider } from '@symbo.ls/react'

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
    }
  }
}

function App() {
  return (
    <SymbolsProvider designSystem={designSystem}>
      <div className="App">
        {/* <Img src={logo} /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Button>
          Learn React
        </Button> */}
        <Box background="red">
          Learn React
        </Box>
      </div>
    </SymbolsProvider>
  );
}

export default App;
