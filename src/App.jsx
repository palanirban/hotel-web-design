import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Dashboard from "./pages/Dashboard";
import ScrollSlider from "./pages/ScrollSlider";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path="/scrollslider" element={<ScrollSlider />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//slickPrev,slickNext ref.current.slickPrev()   ref.current.slickNext()
export default App;
