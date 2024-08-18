import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Stacknavigator } from './src/navigator/StackNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <Stacknavigator/>
    </NavigationContainer>
  )
}

export default App;
