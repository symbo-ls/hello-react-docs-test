import { SymbolsProvider } from '@symbo.ls/react'

// import newly created CustomDesignSystem
import { CustomDesignSystem } from './DesignSystem';

function App() {

  const AppContainer = () => {};

  const Subtitle = () => {};

  const DayAndNight = () => {};

  const ClickToActionButton = () => {};

  return (
    <SymbolsProvider designSystem={CustomDesignSystem}>
    </SymbolsProvider>
  );
}

export default App;
