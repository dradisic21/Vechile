import { makeObservable, observable, action } from "mobx";

class AddVehicleStore {
  selectedOption = "";
  model = "";
  year = "";
  engine_type = "";
  power = "";
  transmission = "";
  color = "";
  image = "";

  constructor() {
    makeObservable(this, {
      selectedOption: observable,
      model: observable,
      year: observable,
      engine_type: observable,
      power: observable,
      transmission: observable,
      color: observable,
      image: observable,
      setSelectedOption: action,
      setModel: action,
      setYear: action,
      setEngine: action,
      setPower: action,
      setTransmission: action,
      setColor: action,
      setImage: action,
    });
  }

  setSelectedOption = (selectedOption) => {
    this.selectedOption = selectedOption;
  };

  setModel = (model) => {
    this.model = model;
  };

  setYear = (year) => {
    this.year = year;
  };

  setEngine = (engine_type) => {
    this.engine_type = engine_type;
  };

  setPower = (power) => {
    this.power = power;
  };

  setTransmission = (transmission) => {
    this.transmission = transmission;
  };

  setColor = (color) => {
    this.color = color;
  };

  setImage = (image) => {
    this.image = image;
  };

}

const addVehicleStore = new AddVehicleStore();
export default addVehicleStore;