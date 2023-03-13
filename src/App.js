// import BUTTON atom https://www.docs.symbols.app/atoms/
import { SymbolsProvider, Text, Box, Button } from '@symbo.ls/react'

// import newly created CustomDesignSystem
import { CustomDesignSystem } from './DesignSystem';

function App() {

  const AppContainer = () => {};

  const Subtitle = () => {};

  const DayAndNight = () => {

  };

  const ClickToActionButton = () => {
    return(
      <Button
        icon={null}
        height={'28px'}
        padding={'0 0 0 0'}
        background={'actionButtonBackground'}
        // Props below will be inherited by TEXT atom
        textAlign={'center'}
        color={'buttonTitleWhite'}
        fontFamily={"Avenir"}
        fontWeight={"300"}
      >
        <Text
          text={"Click to action"}
        />
      </Button>
    )
  };

  return (
    <SymbolsProvider designSystem={CustomDesignSystem}>
      <Box
        background={'appBackgroundColor'}
        width={'100%'}
        height={'100%'}
      >
        <ClickToActionButton/>
      </Box>
    </SymbolsProvider>
  );
}

export default App;
