// File: /gestion-gastos-personales/app/src/components/GastoItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GastoItem = ({ gasto }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{gasto.title}</Text>
      <Text style={styles.amount}>${gasto.amount}</Text>
      <Text style={styles.date}>{gasto.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 14,
    color: 'green',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
});

export default GastoItem;

// This file is intentionally left blank.