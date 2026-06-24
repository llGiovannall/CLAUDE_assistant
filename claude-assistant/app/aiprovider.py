from groq import Groq # type: ignore
from dotenv import load_dotenv
import json
import os
from pathlib import Path


env_path = Path(__file__).parent.parent / ".env.local"

print("ENV PATH:", env_path)

load_dotenv(env_path)
print("API KEY =", os.getenv("GROQ_API_KEY"))
client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

print("cliente criado")


def corrigir_redacao(redacao: str) -> dict:
    prompt = f"""
Você é um corretor especializado na matriz oficial do ENEM.

Avalie a redação segundo as 5 competências.

Cada competência deve receber APENAS uma destas notas:

0
40
80
120
160
200

Descrição das competências:

Competência 1:
Domínio da norma padrão da língua portuguesa.

Competência 2:
Compreensão da proposta de redação e aplicação de conceitos de várias áreas do conhecimento.

Competência 3:
Seleção, organização e interpretação de argumentos.

Competência 4:
Conhecimento dos mecanismos linguísticos necessários para a construção da argumentação.

Competência 5:
Elaboração de proposta de intervenção para o problema abordado.

A nota total deve ser a soma das cinco competências.

Retorne APENAS um JSON válido.


Formato:

{{
    "competencia_1": 0,
    "competencia_2": 0,
    "competencia_3": 0,
    "competencia_4": 0,
    "competencia_5": 0,
    "nota_total": 0
}}

Redação:

{redacao}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}]
    )

    resultado = response.choices[0].message.content
    resultado = resultado.replace("```json", "").replace("```", "").strip()

    dados = json.loads(resultado)
    return dados


if __name__ == "__main__": #jeito python de dizer "roda isso quando executar o arquivo diretamente".
    redacao = input("Cole a redação aqui: ")
    dados = corrigir_redacao(redacao)
    print(f"Nota total: {dados.get('nota_total')}")