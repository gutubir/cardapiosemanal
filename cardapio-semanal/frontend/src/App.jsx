import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { loadCardapio, saveCardapio, criarCardapioVazio } from "./api";

const diasDaSemana = [
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sabado",
  "Domingo",
];

const refeicoes = [
  "Café da manhã",
  "Almoço",
  "Café da tarde",
  "Jantar",
  "Ceia",
];

export default function App() {
  const [cardapio, setCardapio] = useState(criarCardapioVazio);
  const [novaComida, setNovaComida] = useState("");
  const [refeicaoSelecionada, setRefeicaoSelecionada] = useState("Café da manhã");
  const [diaSelecionado, setDiaSelecionado] = useState("Segunda-Feira");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregar() {
      setCarregando(true);
      const dados = await loadCardapio();
      setCardapio(dados);
      setCarregando(false);
    }
    carregar();
  }, []);

  const atualizarCardapio = async (novoCardapio) => {
    setCardapio(novoCardapio);
    await saveCardapio(novoCardapio);
  };

  function adicionarComida() {
    if (!novaComida.trim()) return;
    const novoCardapio = { ...cardapio };
    novoCardapio[diaSelecionado][refeicaoSelecionada] = [
      ...novoCardapio[diaSelecionado][refeicaoSelecionada],
      novaComida.trim(),
    ];
    atualizarCardapio(novoCardapio);
    setNovaComida("");
  }

  function removerComida(dia, refeicao, index) {
    const novoCardapio = { ...cardapio };
    novoCardapio[dia][refeicao] = novoCardapio[dia][refeicao].filter(
      (_, i) => i !== index
    );
    atualizarCardapio(novoCardapio);
  }

  function limparTudo() {
    const vazio = criarCardapioVazio();
    atualizarCardapio(vazio);
  }

  function exportarPDF() {
    const doc = new jsPDF();
    const margem = 15;
    const larguraPagina = doc.internal.pageSize.getWidth() - margem * 2;
    const linhaAltura = 10;
    let y = margem;

    doc.setFontSize(22);
    doc.setTextColor("#6b21a8");
    doc.text("Cardápio Semanal", margem, y);
    y += linhaAltura * 2;

    doc.setFontSize(14);
    doc.setTextColor("#4c1d95");

    diasDaSemana.forEach((dia) => {
      doc.setFontSize(16);
      doc.setTextColor("#7c3aed");
      if (y > 270) {
        doc.addPage();
        y = margem;
      }
      doc.text(dia, margem, y);
      y += linhaAltura;

      refeicoes.forEach((ref) => {
        const comidas = cardapio[dia][ref];
        doc.setFontSize(14);
        doc.setTextColor("#4c1d95");
        if (y > 270) {
          doc.addPage();
          y = margem;
        }
        doc.text(`${ref}:`, margem + 8, y);
        y += linhaAltura;

        if (comidas.length === 0) {
          doc.setFontSize(12);
          doc.setTextColor("#888");
          doc.text("Nenhuma comida adicionada.", margem + 16, y);
          y += linhaAltura;
        } else {
          comidas.forEach((comida) => {
            const textoQuebrado = doc.splitTextToSize(comida, larguraPagina - 24);
            textoQuebrado.forEach((linha) => {
              if (y > 280) {
                doc.addPage();
                y = margem;
              }
              doc.setFontSize(12);
              doc.setTextColor("#222");
              doc.text(linha, margem + 16, y);
              y += linhaAltura;
            });
          });
        }
      });
      y += linhaAltura;
    });

    doc.save("cardapio-semanal.pdf");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cardápio Semanal</h1>

      {carregando ? (
        <p>Carregando...</p>
      ) : (
        <>
          <div className="mb-4">
            <select
              value={diaSelecionado}
              onChange={(e) => setDiaSelecionado(e.target.value)}
              className="border p-2 mr-2"
            >
              {diasDaSemana.map((dia) => (
                <option key={dia} value={dia}>
                  {dia}
                </option>
              ))}
            </select>

            <select
              value={refeicaoSelecionada}
              onChange={(e) => setRefeicaoSelecionada(e.target.value)}
              className="border p-2 mr-2"
            >
              {refeicoes.map((refeicao) => (
                <option key={refeicao} value={refeicao}>
                  {refeicao}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={novaComida}
              onChange={(e) => setNovaComida(e.target.value)}
              placeholder="Nova comida"
              className="border p-2 mr-2"
            />

            <button
              onClick={adicionarComida}
              className="bg-purple-700 text-white px-4 py-2 rounded"
            >
              Adicionar
            </button>
          </div>

          <div>
            {diasDaSemana.map((dia) => (
              <div key={dia} className="mb-4">
                <h2 className="text-xl font-semibold">{dia}</h2>
                {refeicoes.map((refeicao) => (
                  <div key={refeicao} className="ml-4 mb-2">
                    <h3 className="font-medium">{refeicao}</h3>
                    <ul>
                      {cardapio[dia][refeicao].map((comida, index) => (
                        <li key={index} className="flex items-center">
                          <span>{comida}</span>
                          <button
                            onClick={() => removerComida(dia, refeicao, index)}
                            className="ml-2 text-red-500"
                          >
                            Remover
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button
              onClick={limparTudo}
              className="bg-red-600 text-white px-4 py-2 rounded mr-2"
            >
              Limpar Tudo
            </button>
            <button
              onClick={exportarPDF}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Exportar PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
}
