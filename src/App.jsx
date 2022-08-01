import { useState } from "react";
import "./main.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
