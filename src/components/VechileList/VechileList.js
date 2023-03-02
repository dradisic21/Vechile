import React, { useState, useEffect } from "react";
import data from "../data.json";
import AddVechileForm from "../VechileForm/AddVechileForm";
import UpdateVechilePopUp from "../UpdateVechile/UpdateVechilePopUp";
import Button from "../../UI/Button/Button";
import "./VechileList.css";

function VechileList() {
  const [vechiles, setVechiles] = useState([]);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setVechiles(data);
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
    const updatedVechiles = vechiles.filter((vechile) => vechile.id !== id);
    setVechiles(updatedVechiles);
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
          <UpdateVechilePopUp handleClose={togglePopUp} />
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
          <AddVechileForm />
        </div>
      )}

      {error ? (
        <div>{error}</div>
      ) : (
        <div className="screen_content">
          {vechiles.map((vechile) => {
            return (
              <div key={vechile.id} className="card">
                <div className="image_postion">
                  <img
                    src={vechile.image}
                    alt="car"
                    className="image-vechile-list"
                  />
                </div>
                <div className="icons">
                  <i
                    className="material-icons"
                    onClick={() => handleDelete(vechile.id)}
                  >
                    delete
                  </i>
                  <i className="material-icons" onClick={() => togglePopUp()}>
                    edit
                  </i>
                </div>
                <div className="description">
                  <p className="title">
                    {vechile.car_brand} {vechile.model}
                  </p>
                  <p className="subtitle">Features</p>
                  <div className="features">
                    <p>
                      <i className="material-icons">calendar_month</i> Year:{" "}
                      {vechile.year}
                    </p>
                    <p>
                      <i className="material-icons">local_gas_station</i> Engyne
                      type: {vechile.engine_type}
                    </p>
                    <p>
                      <i className="material-icons">bolt</i> Power:{" "}
                      {vechile.power} kW
                    </p>
                    <p>
                      <i className="material-icons">settings</i>
                      Transmition: {vechile.gear}
                    </p>
                    <p>
                      <i className="material-icons">palette</i> Color:{" "}
                      {vechile.color}
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

export default VechileList;
