import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import VehicleList from "./pages/VechileList/VehicleList";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="/vehiclelist" element={<VehicleList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
