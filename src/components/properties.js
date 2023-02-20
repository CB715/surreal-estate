import React, { useEffect, useState } from "react";
import axios from "axios";

import PropertyCard from "./propertyCard";
import Alert from "./alert";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    async function getProperties() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/PropertyListing"
        );
        setProperties(response.data);
        setAlert({
          message: "",
        });
      } catch (error) {
        setAlert({
          message: "Error, please try again later.",
        });
      }
    }
    getProperties();
  }, []);

  return (
    <div className="properties-container">
      <div className="properties">Properties Page</div>
      <Alert message={alert.message} success={alert.isSuccess} />
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};

export default Properties;
