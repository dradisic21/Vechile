import { useEffect } from "react";
import { Input, Button } from "../../components/UI";
import { updateVehicle } from "../../common/Services/VehicleMethodsApi";
import { observer } from "mobx-react";
import updateVehicleStore from "../../stores/UpdateVehicleStore";
import "./UpdateVehiclePopUp.css";



function UpdateVehiclePopUp(props) {
  const { vehicle } = props;

  useEffect(() => {
    updateVehicleStore.setYear(vehicle.year);
    updateVehicleStore.setEngineType(vehicle.engine_type);
    updateVehicleStore.setPower(vehicle.power);
    updateVehicleStore.setTransmission(vehicle.transmission);
    updateVehicleStore.setColor(vehicle.color);
    updateVehicleStore.setImage(vehicle.image);
  }, [vehicle]);


  const handleSubmit = async (event) => { 
    event.preventDefault();
    try {
      const updatedVehicle = await updateVehicle({
        ...vehicle,
        year: updateVehicleStore.year,
        engine_type: updateVehicleStore.engineType,
        power: updateVehicleStore.power,
        transmission: updateVehicleStore.transmission,
        color: updateVehicleStore.color,
        image: updateVehicleStore.image,
      });
      props.onUpdate();
    } catch (error) {
      updateVehicleStore.setError(error);
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
            value={updateVehicleStore.year || vehicle.year}
            onChange={(e) => updateVehicleStore.setYear(e.target.value)}
            placeholder="Enter year of manufacture"
          />
          <Input
            label="Engine type"
            type="text"
            name="engine_type"
            value={updateVehicleStore.engine_type || vehicle.engine_type}
            onChange={(e) => updateVehicleStore.setEngineType(e.target.value)}
            placeholder="Enter engine type"
          />
          <Input
            label="Power"
            type="number"
            name="power"
            value={updateVehicleStore.power || vehicle.power}
            onChange={(e) => updateVehicleStore.setPower(e.target.value)}
            placeholder="Enter engine power"
          />
          <Input
            label="Transmission"
            type="text"
            name="transmission"
            value={updateVehicleStore.transmission || vehicle.transmission}
            onChange={(e) => updateVehicleStore.setTransmission(e.target.value)}
            placeholder="Enter transmission"
          />
          <Input
            label="Color"
            type="text"
            name="color"
            value={updateVehicleStore.color || vehicle.color}
            onChange={(e) => updateVehicleStore.setColor(e.target.value)}
            placeholder="Enter color"
          />
          <Input
            label="Image"
            type="text"
            name="image"
            value={updateVehicleStore.image || vehicle.image}
            onChange={(e) => updateVehicleStore.setImage(e.target.value)}
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

export default observer(UpdateVehiclePopUp);
