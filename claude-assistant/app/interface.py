import streamlit as st
from aiprovider import corrigir_redacao

st.title("Corretor ENEM")

redacao = st.text_area(
    "Cole sua redação aqui",
    height=400
)


if st.button("Corrigir"):
    st.write("Corrigindo...")

    if st.button("Corrigir"):

         resultado = corrigir_redacao(redacao)

    st.write(resultado)

    st.subheader("Resultado")

st.write(
    f"Competência 1: {resultado['competencia_1']}"
)

st.write(
    f"Competência 2: {resultado['competencia_2']}"
)

st.write(
    f"Competência 3: {resultado['competencia_3']}"
)

st.write(
    f"Competência 4: {resultado['competencia_4']}"
)

st.write(
    f"Competência 5: {resultado['competencia_5']}"
)

st.write(
    f"Nota Total: {resultado['nota_total']}"
)