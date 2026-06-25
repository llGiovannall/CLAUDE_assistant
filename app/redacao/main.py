from fastapi import FastAPI, Request
from pydantic import BaseModel
from aiprovider import corrigir_redacao
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class RedacaoRequest(BaseModel):
    texto: str


@app.post("/corrigir")
def corrigir(request: RedacaoRequest):
    print(request)
    resultado = corrigir_redacao(request.texto)

    return {
        "competencia_1": resultado["competencia_1"],
        "competencia_2": resultado["competencia_2"],
        "competencia_3": resultado["competencia_3"],
        "competencia_4": resultado["competencia_4"],
        "competencia_5": resultado["competencia_5"],
        "nota_total": resultado["nota_total"],
    }

@app.get("/")
def root():
    return {"mensagem": "API funcionando"}
@app.get("/teste-correcao")
def teste_correcao():
    return corrigir_redacao("Texto de teste")
@app.post("/debug")
async def debug(request: Request):
    body = await request.body()
    return {"body": body.decode()}
@app.head("/")
def root_head():
    return {}