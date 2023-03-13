import { SymbolsProvider } from '@symbo.ls/react'

// import newly created CustomDesignSystem
import { CustomDesignSystem } from './DesignSystem';

function App() {
  return (
    <SymbolsProvider designSystem={CustomDesignSystem}>
    </SymbolsProvider>
  );
}

export default App;
