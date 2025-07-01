import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from "react";
import "./styles.css";

const Formulario = ({ aoCardCadastrado, times }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoCardCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        >
          Nome
        </CampoTexto>
        <CampoTexto
          obrigatorio={true}
          id="cargo"
          type="text"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        >
          Cargo
        </CampoTexto>
        <CampoTexto
          id="imagem"
          type="text"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        >
          Imagem
        </CampoTexto>
        <ListaSuspensa
          obrigatorio={true}
          itens={times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        >
          Time
        </ListaSuspensa>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
