import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import "./VechileList.css";
import AddVechileForm from '../VechileForm/AddVechileForm';

function VechileList() {
  const [vechiles, setVechiles] = useState([]);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  


  useEffect(() => {
    setVechiles(data);
  }, []);

  const handleDelete = (id) => {
    const updatedVechiles = vechiles.filter((vechile) => vechile.id !== id);
    setVechiles(updatedVechiles);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="screen_container">
      <div className="header">
        <div className="titleHeader">
          <h1>Cars Page List</h1>
        </div>
        <div className="btnPosition">
          <button className="createBtn" onClick={toggleForm}>Create Vechile</button>
        </div>
      </div>
      {showForm && (
      <div>
        <AddVechileForm />
      </div>)}
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
                <i className="material-icons" onClick={() => handleDelete(vechile.id)}>delete</i>
                <i className="material-icons">edit</i>
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
                        Transmition:{" "}
                        {vechile.gear}
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
