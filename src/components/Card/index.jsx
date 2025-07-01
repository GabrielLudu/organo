import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./styles.css";

const Card = ({ card, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(card.id);
  }
  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };
  return (
    <div className="card">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(card.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={card.imagem} alt={card.nome} />
      </div>
      <div className="rodape">
        <h4>{card.nome}</h4>
        <h5>{card.cargo}</h5>
        <div className="favoritar">
          {card.favorito ? (
            <AiFillHeart {...propsFavorito} color="red" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
