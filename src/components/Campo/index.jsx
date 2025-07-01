import "./styles.css";

const Campo = ({
  label,
  placeholder,
  obrigatorio = false,
  valor,
  type = "text",
  aoAlterar,
}) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        required={obrigatorio}
        placeholder={placeholder}
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
      />
    </div>
  );
};

export default Campo;
