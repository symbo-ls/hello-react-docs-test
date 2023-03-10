
// import logo from './logo.svg';
import { Box, SymbolsProvider, useGlobalTheme, useGlobalState } from '@symbo.ls/react'

const editor = {
  remote: true,
  async: true,
  serviceRoute: 'state',
  endpoint: 'api.symbols.dev'
}

const designSystem = {
  globalTheme: 'dark',
  theme: {
    document: {
      '@dark': {
        background: 'black',
        color: 'white'
      },
      '@light': {
        background: 'white',
        color: 'black'
      },
      '@sepia': {
        background: 'brown',
        color: 'white'
      }
    },
  },
  color: {
    britishBlue: '#0A4C8B',
  }
}

const Header = () => {
  const [ globalTheme, setGlobalTheme ] = useGlobalTheme()
  const state = useGlobalState()

  return <>
    {/* <Img src={logo} /> */}
    <h1>{state?.main?.title}</h1>

    <button onClick={() => {
      setGlobalTheme(globalTheme === 'dark' ? 'light' : globalTheme === 'light' ? 'sepia' : 'dark')
    }}>Switch theme from {globalTheme}</button>
  </>
}

const Squad = () => {
  const state = useGlobalState()
  return state?.squad?.data.map((v, k) => <h3 key={k}>{v.name}</h3>)
}

function App() {
  return (
    <SymbolsProvider appKey="byld.symbo.ls" editor={editor} designSystem={designSystem}>
      <Box theme={`document`}>
        <Header/>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Squad />
        
        <Box background="britishBlue" padding="A B" round="A">
          Learn React
        </Box>
      </Box>
    </SymbolsProvider>
  );
}

export default App;
