import React, { useState } from 'react';

const DisponibilidadVet = () => {
  const [disponibles, setDisponibles] = useState([]);
  const [nueva, setNueva] = useState({ fecha: '', hora: '' });

  const agregarDisponibilidad = (e) => {
    e.preventDefault();
    setDisponibles([...disponibles, nueva]);
    setNueva({ fecha: '', hora: '' });
  };

  const eliminar = (index) => {
    const copia = [...disponibles];
    copia.splice(index, 1);
    setDisponibles(copia);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">🕒 Gestionar Disponibilidad</h2>
      <form onSubmit={agregarDisponibilidad} className="mb-4">
        <input type="date" value={nueva.fecha} onChange={(e) => setNueva({ ...nueva, fecha: e.target.value })} className="p-2 border mr-2" required />
        <input type="time" value={nueva.hora} onChange={(e) => setNueva({ ...nueva, hora: e.target.value })} className="p-2 border mr-2" required />
        <button className="bg-blue-600 text-white px-4 py-2">Agregar</button>
      </form>
      <ul>
        {disponibles.map((d, i) => (
          <li key={i} className="flex justify-between border-b py-2">
            <span>{d.fecha} a las {d.hora}</span>
            <button onClick={() => eliminar(i)} className="text-red-600">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisponibilidadVet;