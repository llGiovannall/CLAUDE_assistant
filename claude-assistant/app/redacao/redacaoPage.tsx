"use client";

import React, { useState } from "react";

export default function redacaoPage() {
const [redacao, setRedacao] = useState("");
 const [resultado, setResultado] = useState<any>(null);

    const corrigir = async () => {
  const response = await fetch("https://brainy-assistant.onrender.com/corrigir", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      texto: redacao
    }),
  });

  const dados = await response.json();

 return (
    <div>
      <textarea
        value={redacao}
        onChange={(e) => setRedacao(e.target.value)}
      />

      <button onClick={corrigir}>
        Corrigir
      </button>

      {resultado && (
        <div>
          <p>Competência 1: {resultado.competencia_1}</p>
          <p>Competência 2: {resultado.competencia_2}</p>
          <p>Competência 3: {resultado.competencia_3}</p>
          <p>Competência 4: {resultado.competencia_4}</p>
          <p>Competência 5: {resultado.competencia_5}</p>
          <p>Nota Total: {resultado.nota_total}</p>
        </div>
      )}
    </div>
  );
}

}