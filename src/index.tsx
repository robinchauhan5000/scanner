import { NavigationContainer } from '@react-navigation/native'
import React, { FC } from 'react'
import { NativeModules, Text } from 'react-native'

import { ScanAndAddScreen } from './ScanAndAddScreen'

export const Scanner: FC = () => {
  React.useEffect(() => {
    console.log('ASDSdsds')
  }, [])

  return (
    <NavigationContainer>
      <Text>Hello World</Text>
      <ScanAndAddScreen />
    </NavigationContainer>
  )
}

export default NativeModules.scannerModule
