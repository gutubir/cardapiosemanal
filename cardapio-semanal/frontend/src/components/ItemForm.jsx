import { useState } from 'react';

function ItemForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Adicionar item"
        className="flex-1 border rounded p-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-2 rounded hover:bg-blue-600"
      >
        +
      </button>
    </form>
  );
}

export default ItemForm;
