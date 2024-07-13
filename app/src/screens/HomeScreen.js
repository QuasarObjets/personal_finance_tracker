// /gestion-gastos-personales/app/src/screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from '../config/axios';
import GastoItem from '../components/GastoItem';

const HomeScreen = () => {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    fetchGastos();
  }, []);

  const fetchGastos = async () => {
    try {
      const response = await axios.get('/gastos');
      setGastos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderGastoItem = ({ item }) => (
    <GastoItem gasto={item} />
  );

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Gastos Personales</Text>
      <FlatList
        data={gastos}
        renderItem={renderGastoItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default HomeScreen;