import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {NAVIGATORS} from '../constants/navigators'
import {ListScreen} from '../features/list'
import {DetailsScreen} from '../features/details'

const Stack = createStackNavigator()

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATORS.list} component={ListScreen} />
      <Stack.Screen name={NAVIGATORS.details} component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default RootNavigator
