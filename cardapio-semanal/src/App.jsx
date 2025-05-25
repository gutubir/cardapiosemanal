import React, { useState } from "react";
import jsPDF from "jspdf";

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

export default function App() {
  const [cardapio, setCardapio] = useState(() => {
    const inicial = {};
    diasDaSemana.forEach((dia) => {
      inicial[dia] = {};
      refeicoes.forEach((ref) => {
        inicial[dia][ref] = [];
      });
    });
    return inicial;
  });

  const [novaComida, setNovaComida] = useState("");
  const [refeicaoSelecionada, setRefeicaoSelecionada] = useState(refeicoes[0]);
  const [diaSelecionado, setDiaSelecionado] = useState(diasDaSemana[0]);

  function adicionarComida() {
    if (!novaComida.trim()) return;
    setCardapio((prev) => {
      const copia = { ...prev };
      copia[diaSelecionado][refeicaoSelecionada] = [
        ...copia[diaSelecionado][refeicaoSelecionada],
        novaComida.trim(),
      ];
      return copia;
    });
    setNovaComida("");
  }

  function removerComida(dia, refeicao, index) {
    setCardapio((prev) => {
      const copia = { ...prev };
      copia[dia][refeicao] = copia[dia][refeicao].filter((_, i) => i !== index);
      return copia;
    });
  }

  function limparTudo() {
    const vazio = {};
    diasDaSemana.forEach((dia) => {
      vazio[dia] = {};
      refeicoes.forEach((ref) => {
        vazio[dia][ref] = [];
      });
    });
    setCardapio(vazio);
  }

  function exportarPDF() {
    const doc = new jsPDF();
    const margem = 15;
    const larguraPagina = doc.internal.pageSize.getWidth() - margem * 2;
    const linhaAltura = 10;
    let y = margem;

    doc.setFontSize(22);
    doc.setTextColor("#6b21a8"); // roxo escuro
    doc.text("Cardápio Semanal", margem, y);
    y += linhaAltura * 2;

    doc.setFontSize(14);
    doc.setTextColor("#4c1d95"); // roxo médio

    diasDaSemana.forEach((dia) => {
      doc.setFontSize(16);
      doc.setTextColor("#7c3aed"); // roxo vibrante
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
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-8 drop-shadow-md">
        Cardápio Semanal
      </h1>

      {/* Controles de seleção e input */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <label className="font-semibold text-indigo-700 w-36">Dia:</label>
          <select
            className="flex-1 border border-indigo-300 rounded-md px-3 py-2 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={diaSelecionado}
            onChange={(e) => setDiaSelecionado(e.target.value)}
          >
            {diasDaSemana.map((dia) => (
              <option key={dia} value={dia}>
                {dia}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-4">
          <label className="font-semibold text-indigo-700 w-36">Refeição:</label>
          <select
            className="flex-1 border border-indigo-300 rounded-md px-3 py-2 mb-4 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={refeicaoSelecionada}
            onChange={(e) => setRefeicaoSelecionada(e.target.value)}
          >
            {refeicoes.map((ref) => (
              <option key={ref} value={ref}>
                {ref}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 mt-4">
          <input
            type="text"
            placeholder="Nova comida"
            className="flex-1 border border-indigo-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={novaComida}
            onChange={(e) => setNovaComida(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && adicionarComida()}
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 rounded-md transition"
            onClick={adicionarComida}
          >
            Adicionar
          </button>
        </div>
      </div>

      {/* Cards dos dias */}
      {diasDaSemana.map((dia) => (
        <div
          key={dia}
          className="bg-white rounded-xl shadow-lg p-6 mb-6 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b border-purple-300 pb-2">
            {dia}
          </h2>

          {refeicoes.map((ref) => (
            <div key={ref} className="mb-5">
              <h3 className="text-lg font-semibold text-indigo-600 mb-1">{ref}</h3>
              <div className="space-y-2">
                {cardapio[dia][ref].length === 0 ? (
                  <p className="text-gray-400 italic">Nenhuma comida adicionada.</p>
                ) : (
                  cardapio[dia][ref].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-indigo-50 rounded-md py-1 px-3 text-indigo-800"
                    >
                      <span>{item}</span>
                      <button
                        className="text-red-500 hover:text-red-700 font-bold ml-3"
                        onClick={() => removerComida(dia, ref, i)}
                        title="Remover"
                      >
                        &times;
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Botões gerais */}
      <div className="max-w-4xl mx-auto flex justify-end gap-4 mb-8 mt-4">
        <button
          onClick={exportarPDF}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-md transition"
        >
          Exportar PDF
        </button>
        <button
          onClick={limparTudo}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-md transition"
        >
          Limpar Tudo
        </button>
      </div>
    </div>
  );
}
