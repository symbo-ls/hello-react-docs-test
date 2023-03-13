// import BOX atom https://www.docs.symbols.app/atoms/
import { SymbolsProvider, Text, Box } from '@symbo.ls/react'

// import newly created CustomDesignSystem
import { CustomDesignSystem } from './DesignSystem';

function App() {

  const AppContainer = () => {};

  const Subtitle = () => {};

  const DayAndNight = () => {};

  const ClickToActionButton = () => {};

  return (
    <SymbolsProvider designSystem={CustomDesignSystem}>
      <Box
        background={'appBackgroundColor'}
        width={'100%'}
        height={'100%'}
        // Props below will be inherited by TEXT atom
        textAlign={'center'}
        color={'buttonTitleWhite'}
        fontFamily={"Avenir"}
        fontWeight={"300"}
      >
        <Text
          text={"Hello Symbols"}
        />
      </Box>
    </SymbolsProvider>
  );
}

export default App;
