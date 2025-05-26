import { useState } from 'react';

function DayCard({ day, items, updateItems }) {
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      updateItems([...items, input.trim()]);
      setInput('');
    }
  };

  const clearItems = () => {
    if (confirm(`Tem certeza que deseja limpar o cardápio de ${day}?`)) {
      updateItems([]);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-transform transform overflow-hidden">
      <h2 className="text-xl font-bold mb-4 text-gray-700">{day}</h2>

      <ul className="mb-4">
        {items.map((item, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded mb-1 shadow-sm">
            {item}
          </li>
        ))}
      </ul>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Adicionar item..."
      />

      <div className="flex gap-2">
        <button
          onClick={addItem}
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded shadow transition"
        >
          Adicionar
        </button>

        <button
          onClick={clearItems}
          className="bg-red-400 hover:bg-red-500 text-white py-1 px-3 rounded shadow transition"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

export default DayCard;
