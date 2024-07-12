// File: /gestion-finanzas/mobile/src/components/Gastos.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Gastos = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses data from API and update state
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://api.example.com/expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>
      {expenses.map((expense) => (
        <Text key={expense.id} style={styles.expense}>
          {expense.description}: ${expense.amount}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  expense: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Gastos;