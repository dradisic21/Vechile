import { observable, action, makeObservable } from "mobx";

class VehicleStore {
  year = 0;
  engine_type = "";
  power = 0;
  transmission = "";
  color = "";
  image = "";
  error = undefined;

  constructor(year, engine_type, power, transmission, color, image) {
    this.year = year;
    this.engine_type = engine_type;
    this.power = power;
    this.transmission = transmission;
    this.color = color;
    this.image = image;
    makeObservable(this, {
      year: observable,
      engine_type: observable,
      power: observable,
      transmission: observable,
      color: observable,
      image: observable,
      setYear: action,
      setEngineType: action,
      setPower: action,
      setTransmission: action,
      setColor: action,
      setImage: action,
      setError: action,
      reset: action,
    });
  }

  setYear(year) {
    this.year = year;
  }

  setEngineType(engine_type) {
    this.engine_type = engine_type;
  }

  setPower(power) {
    this.power = power;
  }

  setTransmission(transmission) {
    this.transmission = transmission;
  }

  setColor(color) {
    this.color = color;
  }

  setImage(image) {
    this.image = image;
  }
  setError(error) {
    this.error = error;
  }

  reset() {
    this.year = 0;
    this.engine_type = "";
    this.power = 0;
    this.transmission = "";
    this.color = "";
    this.image = "";
  }
}

const updateVehicleStore = new VehicleStore();

export default updateVehicleStore;