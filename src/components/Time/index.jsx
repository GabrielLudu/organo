import "./styles.css";
import hexToRgba from "hex-to-rgba";
import Card from "../Card";

const Time = ({ time, cards, aoDeletar, mudarCor, aoFavoritar }) => {
  return cards.length > 0 ? (
    <section
      className="time"
      style={{
        backgroundImage: "url(/assets/fundo.png)",
        backgroundColor: hexToRgba(time.cor, "0.6"),
      }}
    >
      <input
        value={time.cor}
        type="color"
        className="input-color"
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
      />
      <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
      <div className="cards">
        {cards.map((card, indice) => {
          return (
            <Card
              corDeFundo={time.cor}
              key={indice}
              card={card}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
