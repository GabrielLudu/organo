import "./styles.css";

const BotaoToggle = ({ alterarVisibilidade }) => {
  return (
    <button onClick={alterarVisibilidade} className="botao-toggle">
      <img src="/assets/botao-toggle.svg" alt="" />
    </button>
  );
};

export default BotaoToggle;
