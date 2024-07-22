import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import backgroundVid from "./Assets/vid.mp4";

const App = () => {
  return (
    <div className="app">
      {/* <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}

      <video src={backgroundVid} autoPlay muted loop />

       <div className="app-content">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
