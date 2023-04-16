import { Input, Select, Button } from "../UI";
import { addNewVehicle } from "../../common/Services/VehicleServices";
import addVehicleStore from "../../stores/AddVehicleStore";
import { observer } from "mobx-react";
import "./AddVehicleForm.css";


function AddVehicleForm(props) {
 
  const handleOptionChange = (event) => {
    addVehicleStore.setSelectedOption(event.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = {
      selectedOption: addVehicleStore.selectedOption,
      model: addVehicleStore.model,
      year: addVehicleStore.year,
      engine_type: addVehicleStore.engine_type,
      power: addVehicleStore.power,
      transmission: addVehicleStore.transmission,
      color: addVehicleStore.color,
      image: addVehicleStore.image,
    }
    addNewVehicle(formData);
    
  }

  return (
    <div className="form-content">
      <form className="add-vechile-form" onSubmit={handleSubmitForm}>
        <Select value={addVehicleStore.selectedOption} onChange={handleOptionChange} vehicleMakeMap={props.vehicleMakeMap}/>
        <Input label="Model" type="text" placeholder="Enter model car" onChange={(e) => addVehicleStore.setModel(e.target.value)}/>
        <Input label="Year" type="number" placeholder="Enter year of manufacture" onChange={(e) => addVehicleStore.setYear(e.target.value)}/>
        <Input label="Engine type" type="text" placeholder="Enter engine type"  onChange={(e) => addVehicleStore.setEngine(e.target.value)}/>
        <Input label="Power" type="number" placeholder="Enter engine power"  onChange={(e) => addVehicleStore.setPower(e.target.value)}/>
        <Input label="Transmission" type="text" placeholder="Enter transmition" onChange={(e) => addVehicleStore.setTransmission(e.target.value)}/>
        <Input label="Color" type="text" placeholder="Enter color" onChange={(e) => addVehicleStore.setColor(e.target.value)}/>
        <Input label="Image" type="text" placeholder="Enter image link" onChange={(e) => addVehicleStore.setImage(e.target.value)}/>
        <Button className="button" type="submit" name="Add Vechile"/>
      </form>
    </div>
  );
}

export default observer(AddVehicleForm);
