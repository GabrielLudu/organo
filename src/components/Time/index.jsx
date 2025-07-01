import "./styles.css";
import Card from "../Card";

const Time = ({ nome, corPrimaria, corSecundaria, cards }) => {
  return cards.length > 0 ? (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="cards">
        {cards.map((card) => (
          <Card
            corDeFundo={corPrimaria}
            key={card.nome}
            nome={card.nome}
            cargo={card.cargo}
            imagem={card.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
