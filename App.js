import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Produtos } from './views';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Beer Store',
            headerStyle: { backgroundColor: '#006600' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' }
          }}
        />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Produtos' component={Produtos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
