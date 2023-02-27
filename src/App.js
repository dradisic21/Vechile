import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import VechileList from "./components/VechileList/VechileList";
import VechileDetails from "./components/VechileDetails/VechileDetails";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vechilelist" element={<VechileList />} />
          <Route path="/vechiledetails" element={<VechileDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
