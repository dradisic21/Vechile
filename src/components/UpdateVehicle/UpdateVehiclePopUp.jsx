import "./UpdateVehiclePopUp.css";
import { Input, Button } from "../../components/UI";
import { updateVehicle } from "../../common/Services/VehicleMethodsApi";
import { observer } from "mobx-react";
import updateVehicleStore from "../../stores/UpdateVehicleStore";

function UpdateVehiclePopUp(props) {
  const { vehicle } = props;

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
            value={updateVehicleStore.year}
            onChange={(e) => updateVehicleStore.setYear(e.target.value)}
            placeholder="Enter year of manufacture"
          />
          <Input
            label="Engine type"
            type="text"
            name="engineType"
            value={updateVehicleStore.engine_type}
            onChange={(e) => updateVehicleStore.setEngineType(e.target.value)}
            placeholder="Enter engine type"
          />
          <Input
            label="Power"
            type="number"
            name="power"
            value={updateVehicleStore.power}
            onChange={(e) => updateVehicleStore.setPower(e.target.value)}
            placeholder="Enter engine power"
          />
          <Input
            label="Transmission"
            type="text"
            name="transmission"
            value={updateVehicleStore.transmission}
            onChange={(e) => updateVehicleStore.setTransmission(e.target.value)}
            placeholder="Enter transmission"
          />
          <Input
            label="Color"
            type="text"
            name="color"
            value={updateVehicleStore.color}
            onChange={(e) => updateVehicleStore.setColor(e.target.value)}
            placeholder="Enter color"
          />
          <Input
            label="Image"
            type="text"
            name="image"
            value={updateVehicleStore.image}
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
