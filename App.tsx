/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {StyleSheet} from 'react-native'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from './src/store'
import RootNavigator from './src/navigation'
import {Provider} from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App
