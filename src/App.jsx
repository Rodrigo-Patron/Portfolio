import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import Header from "./Components/Header/Header.jsx";
import Main from "./Components/Main/Main.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
