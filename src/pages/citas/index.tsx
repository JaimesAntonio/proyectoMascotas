import React, { useState, useEffect } from 'react';

export const VerCitas = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasEjemplo = [
      {
        id: 1,
        cliente: 'cliente1@example.com',
        mascota: 'Firulais',
        fecha: '2025-05-05',
        hora: '10:00',
        motivo: 'Vacunación'
      },
      {
        id: 2,
        cliente: 'cliente2@example.com',
        mascota: 'Mishi',
        fecha: '2025-05-06',
        hora: '14:30',
        motivo: 'Revisión general'
      }
    ];
    setCitas(citasEjemplo);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">📋 Citas Agendadas</h2>
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Cliente</th>
            <th className="p-2 border">Mascota</th>
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">Hora</th>
            <th className="p-2 border">Motivo</th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td className="p-2 border">{cita.cliente}</td>
              <td className="p-2 border">{cita.mascota}</td>
              <td className="p-2 border">{cita.fecha}</td>
              <td className="p-2 border">{cita.hora}</td>
              <td className="p-2 border">{cita.motivo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ----------------------------
// src/pages/DisponibilidadVet.jsx
