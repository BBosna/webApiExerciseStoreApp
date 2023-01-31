import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Dükkan',
            //headerTintColor: 'white',
            headerStyle: {backgroundColor: '#7953d2'},
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Dükkan',
            //headerTintColor: 'white',
            headerStyle: {backgroundColor: '#7953d2'},
            headerTitleStyle: {color: 'white'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
