import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import CharDetail from "./components/CharDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/"  element={<Home />}></Route>
          <Route path="/char/:char_id" component={<CharDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
