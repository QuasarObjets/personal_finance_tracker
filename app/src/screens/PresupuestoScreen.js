// /gestion-gastos-personales/app/src/screens/PresupuestoScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PresupuestoScreen = () => {
  const [presupuesto, setPresupuesto] = useState('');

  const handleGuardarPresupuesto = () => {
    // Lógica para guardar el presupuesto en la base de datos o en el estado de la aplicación
    console.log('Presupuesto guardado:', presupuesto);
  };

  return (
    <View>
      <Text>Establecer Presupuesto</Text>
      <TextInput
        placeholder="Ingrese el presupuesto"
        value={presupuesto}
        onChangeText={setPresupuesto}
      />
      <Button title="Guardar Presupuesto" onPress={handleGuardarPresupuesto} />
    </View>
  );
};

export default PresupuestoScreen;