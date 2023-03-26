import { observable, action, makeObservable } from "mobx";

class VehicleStore {
  year = 0;
  engineType = "";
  power = 0;
  transmission = "";
  color = "";
  image = "";

  constructor() {
    makeObservable(this, {
      year: observable,
      engineType: observable,
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
      reset: action,
    });
  }

  setYear(year) {
    this.year = year;
  }

  setEngineType(engineType) {
    this.engineType = engineType;
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
    this.engineType = "";
    this.power = 0;
    this.transmission = "";
    this.color = "";
    this.image = "";
  }
}

const updateVehicleStore = new VehicleStore();
export default updateVehicleStore;