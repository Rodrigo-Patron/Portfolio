import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="app">
      <div class="area">
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
      </div>

      <div className="app-content">
        <Header />
        <Main />
        {/* <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
