import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MyCart from '../screens/MyCart';
import ProductInfo from '../screens/ProductInfo';
import ProductList from '../screens/ProductList';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="ProductInfo" component={ProductInfo} />
      <Stack.Screen name="ProductList" component={ProductList} />
    </Stack.Navigator>
  );
};

export default Routes;
