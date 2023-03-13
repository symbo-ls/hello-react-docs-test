// import TEXT atom https://www.docs.symbols.app/atoms/
import { SymbolsProvider, Text } from '@symbo.ls/react'

// import newly created CustomDesignSystem
import { CustomDesignSystem } from './DesignSystem';

function App() {

  const AppContainer = () => {};

  const Subtitle = () => {};

  const DayAndNight = () => {};

  const ClickToActionButton = () => {};

  return (
    <SymbolsProvider designSystem={CustomDesignSystem}>
      <Text text={"Hello Symbols"} />
    </SymbolsProvider>
  );
}

export default App;
