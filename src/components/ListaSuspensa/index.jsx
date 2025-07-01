import "./styles.css";

const ListaSuspensa = ({ itens, children, obrigatorio, valor, aoAlterar }) => {
  return (
    <div className="lista-suspensa">
      <label>{children}</label>
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
