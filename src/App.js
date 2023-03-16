// import Flex and Icon atoms https://www.docs.symbols.app/atoms/
import { useEffect, useState } from 'react'
import { SymbolsProvider, Text, Box, Button, Flex, Tooltip } from '@symbo.ls/react'

// import newly created CustomDesignSystem
import { CustomDesignSystem } from './DesignSystem'

const clearCacheData = () => {
  caches.keys().then((names) => {
  names.forEach((name) => {
    caches.delete(name)
  })
  })
  console.log('Complete Cache Cleared')
}

function App() {
  useEffect(() => {
    clearCacheData()
  }, [])

  const [showtooltip, setShowtooltip] = useState(false)

  const AppContainer = () => {} // eslint-disable-line

  const SunComponent = (props) => {
    const flexProps = {
      flexDirection: 'column',
    }

    const containerStyle = {
      justifyContent: 'space-between',
      position: 'relative',
    }

    return(
      <Flex
        {...flexProps}
        {...containerStyle}
        background={'sunCardBackground'}
        width={'363px'}
        padding={'16px 12px 22px 26px'}
        borderRadius={'21px'}
      >
        <DayAndNight/>
        <ClickToActionButton/>
        <SecretButton/>
        {
          showtooltip ?
            <Tooltip/>
            : null
        }
      </Flex>
    )
  }

  const Subtitle = (props) => {
    const flexProps = {
      flexDirection: 'column'
    }

    return(
      <Flex
        {...flexProps}
      >
        <Box
          tag={'p'}
          margin={'0'}
          color={'paragraphStandartColor'}
        >
          A mystery card
        </Box>
        <Box
          tag={'h1'}
          margin={'0'}
          color={'buttonTitleWhite'}
        >
          Hello
        </Box>
      </Flex>
    )
  }

  const DayAndNight = (props) => {
    const flexProps = {
      flexDirection: 'row',
    }

    return(
      <Flex
        {...flexProps}
        alignItems={'flex-start'}
        justifyContent={'space-between'}
        margin={'0 0 40px 0'}
      >
        <Subtitle/>
        <Flex
          {...flexProps}
          alignItems={'center'}
        >
          <Button
            boxSizing="content-box"
            background={'inherit'}
            icon={'sun'}
            name={'sun'}
            color={'themeIconYellow'}
          />
          <Button
            boxSizing="content-box"
            background={'inherit'}
            name={'moon'}
            color={'themeIconYellow'}
          />
        </Flex>
      </Flex>
    )
  }

  const ClickToActionButton = () => {
    return(
      <Button
        icon={null}
        height={'28px'}
        padding={'10px 14px'}
        width={'fit-content'}
        background={'actionButtonBackground'}
        color={'buttonTitleWhite'}
        fontFamily={"Avenir"}
        fontWeight={"300"}
      >
        <Text
          text={"Click to action"}
        />
      </Button>
    )
  }

  const showSecretTooltip = () => {
    setShowtooltip(true)
  }

  const hideSecretTooltip = () => {
    setShowtooltip(false)
  }

  const SecretButton = () => {
    const containerStyleProps = {
      position: 'absolute',
      bottom: '0',
      right: '0',
    }

    return(
      <>
        <Button
          onMouseOver={showSecretTooltip}
          onMouseOut={hideSecretTooltip}
          {...containerStyleProps}
          boxSizing="content-box"
          background={'inherit'}
          icon={'moon'}
          name={'moon'}
          color={'hintIconGray'}
        />
      </>
    )
  }

  return (
    <SymbolsProvider designSystem={CustomDesignSystem}>
      <Flex
        background={'appBackgroundColor'}
        width={'100%'}
        height={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        padding={'32px'}
      >
        <SunComponent />
      </Flex>
    </SymbolsProvider>
  )
}

export default App
