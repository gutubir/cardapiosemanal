// Carregar dados do backend
export const loadData = async () => {
  try {
    const response = await fetch('http://localhost:5000/cardapio');
    if (!response.ok) throw new Error('Erro ao carregar dados');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return []; // fallback caso dê erro
  }
};

// Salvar dados no backend
export const saveData = async (data) => {
  try {
    const response = await fetch('http://localhost:5000/cardapio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Erro ao salvar dados');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
