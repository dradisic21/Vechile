import React, { useState, useEffect } from "react";
import data from "../data.json";
import AddVehicleForm from "../VehicleForm/AddVehicleForm";
import UpdateVehiclePopUp from "../UpdateVehicle/UpdateVehiclePopUp";
import Button from "../../UI/Button/Button";
import "./VehicleList.css";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setVehicles(data);
    // fetch VehicleServices
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
    setVehicles(updatedVehicles);
  };

  const showAddForm = () => {
    setShowForm(!showForm);
  };

  const togglePopUp = () => {
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
          <UpdateVehiclePopUp handleClose={togglePopUp} />
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
          <AddVehicleForm />
        </div>
      )}

      {error ? (
        <div>{error}</div>
      ) : (
        <div className="screen_content">
          {vehicles.map((vehicle) => {
            return (
              <div key={vehicle.id} className="card">
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
                  <i className="material-icons" onClick={() => togglePopUp()}>
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
                      Transmition: {vehicle.gear}
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
