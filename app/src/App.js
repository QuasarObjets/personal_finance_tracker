// /gestion-gastos-personales/app/src/App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PresupuestoScreen from './screens/PresupuestoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Presupuesto" component={PresupuestoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;