import "./styles.css";

const ListaSuspensa = ({
  itens,
  label,
  obrigatorio = false,
  valor,
  aoAlterar,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
      >
        <option />
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
