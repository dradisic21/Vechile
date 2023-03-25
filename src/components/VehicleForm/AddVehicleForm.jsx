import {useState, useEffect} from "react";
import "./AddVehicleForm.css";
import { Input, Select, Button } from "../UI";
import { addNewVehicle } from "../../common/Services/VehicleServices";


function AddVehicleForm(props) {
  const [selectedOption, setSelectedOption] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [engine_type, setEngine] = useState('');
  const [power, setPower] = useState('');
  const [transmission, setTransmission] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  
 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      model, year, engine_type, power, transmission, color, image
    }
    // ovako doda ali ne prikaze odma u listi 
  addNewVehicle(formData);
  }

  return (
    <div className="form-content">
      <form className="add-vechile-form" onSubmit={handleSubmitForm}>
        <Select value={selectedOption} onChange={handleOptionChange} vehicleMakeMap={props.vehicleMakeMap}/>
        <Input label="Model" type="text" placeholder="Enter model car" onChange={(e) => setModel(e.target.value)}/>
        <Input label="Year" type="number" placeholder="Enter year of manufacture" onChange={(e) => setYear(e.target.value)}/>
        <Input label="Engine type" type="text" placeholder="Enter engine type"  onChange={(e) => setEngine(e.target.value)}/>
        <Input label="Power" type="number" placeholder="Enter engine power"  onChange={(e) => setPower(e.target.value)}/>
        <Input label="Transmission" type="text" placeholder="Enter transmition" onChange={(e) => setTransmission(e.target.value)}/>
        <Input label="Color" type="text" placeholder="Enter color" onChange={(e) => setColor(e.target.value)}/>
        <Input label="Image" type="text" placeholder="Enter image link" onChange={(e) => setImage(e.target.value)}/>
        <Button className="button" type="submit" name="Add Vechile"/>
      </form>
    </div>
  );
}

export default AddVehicleForm;
