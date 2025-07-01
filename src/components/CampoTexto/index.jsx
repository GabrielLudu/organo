import "./styles.css";

const CampoTexto = ({
  id,
  children,
  placeholder,
  obrigatorio,
  valor,
  aoAlterar,
}) => {
  const aoDigitar = (evento) => {
    aoAlterar(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label htmlFor={id}>{children}</label>
      <input
        type="text"
        required={obrigatorio}
        id={id}
        placeholder={placeholder}
        value={valor}
        onChange={aoDigitar}
      />
    </div>
  );
};

export default CampoTexto;
