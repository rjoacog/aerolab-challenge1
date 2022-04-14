import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar"
import Home from "../src/components/Home"
import History from "./components/History";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
