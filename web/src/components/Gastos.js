// File: gestion-finanzas/web/src/components/Gastos.js

import React, { useState, useEffect } from 'react';

const Gastos = () => {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    // Fetch gastos data from API and update state
    fetch('/api/gastos')
      .then(response => response.json())
      .then(data => setGastos(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    // Delete gasto with specified id from API and update state
    fetch(`/api/gastos/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => setGastos(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Gastos</h1>
      <ul>
        {gastos.map(gasto => (
          <li key={gasto.id}>
            <span>{gasto.description}</span>
            <span>{gasto.amount}</span>
            <button onClick={() => handleDelete(gasto.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gastos;