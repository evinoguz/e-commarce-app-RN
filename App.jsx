import React from 'react';
import Routes from './src/navigators/Routes';
import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
