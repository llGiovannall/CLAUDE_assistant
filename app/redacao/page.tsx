"use client";

import React, { useState } from "react";

export default function RedacaoPage() {
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
    setResultado(dados);
  };

  return (

    <div className="mt-10 p-10">
    <form className="flex flex-col mx-auto gap-2 max-w-lg">
        <fieldset className="contents">
            <div className="flex flex-col">
                <label htmlFor="input" className="font-semibold text-lg">
					Digite sua redação
				</label>
               <textarea 
  name="input" 
  id="input" 
  rows={5} 
  maxLength={256} 
  required
  value={redacao}
  onChange={(e) => setRedacao(e.target.value)}
  className="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm"
/>
            </div>
            <button type="submit" onClick = {corrigir}
				className="rounded-lg p-3 bg-green-500/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-green-500/40 font-medium text-base leading-none flex flex-row items-center justify-center gap-2"><svg
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
					<path fill-rule="evenodd"
						d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
						fillRule="evenodd"
clipRule="evenodd"></path>
				</svg>
				<span className="font-bold">Corrigir</span>
			</button>
        </fieldset>
    </form>
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