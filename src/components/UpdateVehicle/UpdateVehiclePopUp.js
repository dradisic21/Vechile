import React from "react";
import "./UpdateVehiclePopUp.css"
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button"

function UpdateVehiclePopUp(props) {
    return (
        <div className="pop-up-content">
            <div className="box">
            <span className="close-icon" onClick={props.handleClose}>x</span>
                <form className="update-vechile-form">
                    <Input label="Car brand" type="text" placeholder="Enter car brand"/>
                    <Input label="Model" type="text" placeholder="Enter model car"/>
                    <Input label="Year" type="number" placeholder="Enter year of manufacture"/>
                    <Input label="Engine type" type="text" placeholder="Enter engine type"/>
                    <Input label="Power" type="number" placeholder="Enter engine power"/>
                    <Input label="Gear" type="text" placeholder="Enter transmition"/>
                    <Input label="Color" type="text" placeholder="Enter color"/>
                    <Input label="Image" type="text" placeholder="Enter image link"/>
                    <div>
                        <Button className="button" type="submit" name="Update Vechile"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateVehiclePopUp;