import { makeObservable, observable, action } from "mobx";

class VehicleListStore {
  refresh = true;
  vehicles = [];
  selectedVehicle = null;
  error = "";
  showForm = false;
  showScrollBtn = false;
  isOpen = false;
  vehicleMakeMap = {};
  vehicleModelMap = {};

  constructor() {
    makeObservable(this, {
      refresh: observable,
      vehicles: observable,
      selectedVehicle: observable,
      error: observable,
      showForm: observable,
      showScrollBtn: observable,
      isOpen: observable,
      vehicleMakeMap: observable,
      vehicleModelMap: observable,
      setRefresh: action,
      setVehicles: action,
      setSelectedVehicle: action,
      setError: action,
      setShowForm: action,
      setShowScrollBtn: action,
      setIsOpen: action,
      setVehicleMakeMap: action,
      setVehicleModelMap: action,
    });
  }

  setRefresh(refresh) {
    this.refresh = refresh;
  }

  setVehicles(vehicle) {
    this.vehicles = vehicle;
  }

  setSelectedVehicle(value) {
    this.selectedVehicle = value;
  }

  setError(error) {
    this.error = error;
  }

  setShowForm(showForm) {
    this.showForm = showForm;
  }

  setShowScrollBtn(showScrollBtn) {
    this.showScrollBtn = showScrollBtn;
  }

  setIsOpen(isOpen) {
    this.isOpen = isOpen;
  }

  setVehicleMakeMap(vehicleMakeMap) {
    this.vehicleMakeMap = vehicleMakeMap;
  }

  setVehicleModelMap(vehicleModelMap) {
    this.vehicleModelMap = vehicleModelMap;
  }
}

const vehicleListStore = new VehicleListStore();

export default vehicleListStore;