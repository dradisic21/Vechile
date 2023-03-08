import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login/Login";
import VehicleList from "./components/VechileList/VehicleList";
import VehicleDetails from "./components/VehicleDetails/VehicleDetails";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="/vehiclelist" element={<VehicleList />} />
          <Route path="/vehicledetails" element={<VehicleDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
