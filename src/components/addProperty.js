import React, { useState } from "react";

import postProperty from "../requests/postProperty";
import Alert from "./alert";
import "../styles/add-property.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    postProperty(fields, setAlert);
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <div>
        <form onSubmit={handleAddProperty}>
          <div>
            <label htmlFor="title" className="container">
              <span className="label-text">Title</span>
              <input
                className="input-field"
                id="title"
                name="title"
                value={fields.title}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-city">
            <label htmlFor="city">
              City
              <select
                id="city"
                name="city"
                value={fields.city}
                onChange={handleFieldChange}
              >
                <option value="Manchester">Manchester</option>
                <option value="Leeds">Leeds</option>
                <option value="Sheffield">Sheffield</option>
                <option value="Liverpool">Liverpool</option>
              </select>
            </label>
          </div>
          <div className="add-property-type">
            <label htmlFor="type">
              Type of Property
              <select
                id="type"
                name="type"
                value={fields.type}
                onChange={handleFieldChange}
              >
                <option value="Flat">Flat</option>
                <option value="Detached">Detached</option>
                <option value="Semi-Detached">Semi-Detached</option>
                <option value="Terraced">Terraced</option>
                <option value="End of Terrace">End of Terrace</option>
                <option value="Cottage">Cottage</option>
                <option value="Bungalow">Bungalow</option>
              </select>
            </label>
          </div>
          <div className="add-property-bedrooms">
            <label htmlFor="bedrooms">
              Number of Bedrooms
              <input
                id="bedrooms"
                name="bedrooms"
                value={fields.bedrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-bathrooms">
            <label htmlFor="bathrooms">
              Number of Bathrooms
              <input
                id="bathrooms"
                name="bathrooms"
                value={fields.bathrooms}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-price">
            <label htmlFor="price">
              Price
              <input
                id="price"
                name="price"
                value={fields.price}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-email">
            <label htmlFor="email">
              Email Address
              <input
                id="email"
                name="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </label>
          </div>
          <div className="add-property-button">
            <button type="submit">Add</button>
          </div>
          <Alert message={alert.message} success={alert.isSuccess} />
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
