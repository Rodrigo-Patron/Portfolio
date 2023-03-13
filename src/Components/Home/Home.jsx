import "./Home.scss";
import foto from "../../Img/profile-pic.png";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-text">
        <h1 className="h1-hero">Hola! I am </h1>
        <h1 className="h1-name">
          Rodrigo <br />
          Patrón Flores
        </h1>
        <h1 className="h1-hero">
          <span className="in-progress">Full-Stack Developer </span>
        </h1>
      </div>
      <img src={foto} alt="Foto of Rodrigo Patron" />
      <Footer />
    </div>
  );
};

export default Home;
