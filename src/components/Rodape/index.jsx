import "./styles.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul className="redes-sociais">
          <li>
            <a href="facebook.com">
              <img src="/assets/fb.png" alt="Icone do Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com">
              <img src="/assets/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com">
              <img src="/assets/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/assets/logo.png" alt="Logo da organo" />
      </section>
      <section>
        <p>Desenvolvido por Gabriel Luduvice</p>
      </section>
    </footer>
  );
};

export default Rodape;
