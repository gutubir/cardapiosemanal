// api.js (por exemplo)
export const loadCardapio = async () => {
  try {
    const response = await fetch("http://localhost:5000/cardapio");
    if (!response.ok) throw new Error("Erro ao carregar dados");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // Retorna estrutura vazia igual a inicial
    return criarCardapioVazio();
  }
};

export const saveCardapio = async (cardapio) => {
  try {
    const response = await fetch("http://localhost:5000/cardapio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardapio),
    });
    if (!response.ok) throw new Error("Erro ao salvar dados");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Função para criar estrutura vazia igual ao estado inicial do cardápio
export const criarCardapioVazio = () => {
  const diasDaSemana = [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    "Domingo",
  ];
  const refeicoes = [
    "Café da manhã",
    "Almoço",
    "Café da tarde",
    "Jantar",
    "Ceia",
  ];

  const vazio = {};
  diasDaSemana.forEach((dia) => {
    vazio[dia] = {};
    refeicoes.forEach((ref) => {
      vazio[dia][ref] = [];
    });
  });
  return vazio;
};
