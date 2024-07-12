// File: gestion-finanzas/mobile/src/App.js

import React from 'react';
import { View, Text } from 'react-native';
import Gastos from './components/Gastos';

const App = () => {
  return (
    <View>
      <Text>Welcome to the Gestion Finanzas mobile app!</Text>
      <Gastos />
    </View>
  );
};

export default App;