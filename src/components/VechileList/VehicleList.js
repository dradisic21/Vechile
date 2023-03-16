import React, { useState, useEffect } from "react";
import { getAllVehicleData } from "../../Services/VehicleServices";
import AddVehicleForm from "../VehicleForm/AddVehicleForm";
import UpdateVehiclePopUp from "../UpdateVehicle/UpdateVehiclePopUp";
import Button from "../../UI/Button/Button";
import { deleteVehicle } from "../../Services/VehicleApi.js";
import "./VehicleList.css";

function VehicleList() {
  const [refresh, setRefresh] = useState(true);
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [vehicleMakeMap, setVehicleMakeMap] = useState({});
  const [vehicleModelMap, setVehicleModelMap] = useState({});

  // get Vehicle
  useEffect(() => {
    const getVehicles = async () => {
      try {
        const vehicleData = await getAllVehicleData();
        setVehicles(vehicleData.vehicles);
        setVehicleMakeMap(vehicleData.vehicleMakeMap);
        setVehicleModelMap(vehicleData.vehicleModelMap);
      } catch (err) {
        setError(err);
      } finally {
        setRefresh(false);
      }
    };
    if(refresh === true) {
      getVehicles();
    }
  }, [refresh]);

    const handleUpdate = () => {
      setRefresh(true);
    } 
  // delete item

    const handleDelete = async (vehicleId) => {
      try {
        const response = await deleteVehicle(vehicleId);
        console.log(response.data);
        setVehicles(vehicles.filter(vehicle => vehicle.id !== vehicleId));
      } catch (error) {
        console.error(error);
      }
    };
 

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scrool page to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // show the add form
  const showAddForm = () => {
    setShowForm(!showForm);
  };

  // update item pop up
  const togglePopUp = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsOpen(!isOpen);
  };


  return (
    <div className="screen_container">
      <div className="header">
        <div className="titleHeader">
          <h1>Cars Page List</h1>
        </div>
        <div className="btnPosition">
          <Button
            className="createBtn"
            onClick={showAddForm}
            name="Create Vechile"
          />
        </div>
      </div>

      {isOpen && (
        <div>
          <UpdateVehiclePopUp handleClose={togglePopUp} vehicle={selectedVehicle} onUpdate={handleUpdate} />
        </div>
      )}

      {showScrollBtn && (
        <div className="scroll-position">
          <div className="scroll" onClick={scrollToTop}>
            <i className="material-icons">arrow_upward</i>
          </div>
        </div>
      )}

      {showForm && (
        <div>
          <AddVehicleForm vehicleMakeMap={vehicleMakeMap} />
        </div>
      )}

      {error ? (
        <div>{error.message}</div>
      ) : (
        <div className="screen_content">
          {vehicles.map((vehicle) => {
            return (
              <div key={vehicle.vehicle_model_id} className="card">
                <div className="image_postion">
                  <img
                    src={vehicle.image}
                    alt="car"
                    className="image-vechile-list"
                  />
                </div>
                <div className="icons">
                  <i
                    className="material-icons"
                    onClick={() => handleDelete(vehicle.id)}
                  >
                    delete
                  </i>
                  <i className="material-icons" onClick={() => togglePopUp(vehicle)}>
                    edit
                  </i>
                </div>
                <div className="description">
                  <p className="title">
                    {vehicle.car_brand} {vehicle.model}
                  </p>
                  <p className="subtitle">Features</p>
                  <div className="features">
                    <p>
                      <i className="material-icons">calendar_month</i> Year:{" "}
                      {vehicle.year}
                    </p>
                    <p>
                      <i className="material-icons">local_gas_station</i> Engyne
                      type: {vehicle.engine_type}
                    </p>
                    <p>
                      <i className="material-icons">bolt</i> Power:{" "}
                      {vehicle.power} kW
                    </p>
                    <p>
                      <i className="material-icons">settings</i>
                      Transmission: {vehicle.transmission}
                    </p>
                    <p>
                      <i className="material-icons">palette</i> Color:{" "}
                      {vehicle.color}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default VehicleList;
