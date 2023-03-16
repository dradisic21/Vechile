import React, { useState } from "react";
import "./UpdateVehiclePopUp.css";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { updateVehicle } from "../../Services/VehicleApi";

function UpdateVehiclePopUp(props) {
  const [year, setYear] = useState(props.vehicle.year || 0);
  const [engine_type, setEngineType] = useState(props.vehicle.engine_type || "");
  const [power, setPower] = useState(props.vehicle.power || 0);
  const [transmission, setTransmission] = useState(props.vehicle.transmission || "");
  const [color, setColor] = useState(props.vehicle.color || "");
  const [image, setImage] = useState(props.vehicle.image || "");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedVehicle = await updateVehicle({...props.vehicle, year, engine_type, power, transmission, color, image});
        props.onUpdate();
      //   console.log(updatedVehicle, props.vehicle);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pop-up-content">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <form className="update-vechile-form" onSubmit={handleSubmit}>
          <Input
            label="Year"
            type="number"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter year of manufacture"
          />
          <Input
            label="Engine type"
            type="text"
            name="engineType"
            value={engine_type}
            onChange={(e) => setEngineType(e.target.value)}
            placeholder="Enter engine type"
          />
          <Input
            label="Power"
            type="number"
            name="power"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            placeholder="Enter engine power"
          />
          <Input
            label="Transmission"
            type="text"
            name="transmission"
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            placeholder="Enter transmission"
          />
          <Input
            label="Color"
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter color"
          />
          <Input
            label="Image"
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image link"
          />
          <div>
            <Button className="button" type="submit" name="Update Vehicle" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateVehiclePopUp;
