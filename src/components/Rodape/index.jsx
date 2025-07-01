import "./styles.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="/assets/fb.png" alt="Icone do Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="/assets/tw.png" alt="Icone do Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="/assets/ig.png" alt="Icone do Instagram" />
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
