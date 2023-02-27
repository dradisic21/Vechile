import React, { useState } from "react";
import "./AddVechileForm.css";

function AddVechileForm() {
  return (
    <div className="form-content">
      <form className="add-vechile-form">
        <label>
          Car brand
          <div>
            <input type="text" placeholder="Enter car brand" />
          </div>
        </label>
        <label>
          Model
          <div>
            <input type="text" placeholder="Enter model car" />
          </div>
        </label>
        <label>
          Year
          <div>
            <input type="number" placeholder="Enter year of manufacture" />
          </div>
        </label>
        <label>
          Engine type
          <div>
            <input type="text" placeholder="Enter engine type" />
          </div>
        </label>
        <label>
          Power
          <div>
            <input type="number" placeholder="Enter engine power" />
          </div>
        </label>
        <label>
          Gear
          <div>
            <input type="text" placeholder="Enter transmition" />
          </div>
        </label>
        <label>
          Color
          <div>
            <input type="text" placeholder="Enter color" />
          </div>
        </label>
        <label>
          Image
          <div>
            <input type="text" placeholder="Enter image link" />
          </div>
        </label>
        <div>
        <button className="addButton" type="submit">Add Vechile</button>
        </div>
      </form>
    </div>
  );
}

export default AddVechileForm;
