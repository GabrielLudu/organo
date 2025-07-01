import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from "react";
import "./styles.css";

const Formulario = ({ aoCardCadastrado, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
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
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          label="Nome"
        />
        <Campo
          obrigatorio={true}
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          label="Cargo"
        />
        <Campo
          placeholder="Informe o endereço da imagem "
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
          label="Imagem"
        />
        <ListaSuspensa
          label="Times"
          obrigatorio={true}
          itens={times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />

        <Botao texto="Criar Card" />
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          placeholder="Digite o nome do time "
          valor={nomeTime}
          aoAlterar={(valor) => setNomeTime(valor)}
          label="Nome do time"
        />
        <Campo
          obrigatorio
          type="color"
          placeholder="Digite a cor do time "
          valor={corTime}
          aoAlterar={(valor) => setCorTime(valor)}
          label="Cor do time"
        />
        <Botao texto="Criar Time" />
      </form>
    </section>
  );
};

export default Formulario;
