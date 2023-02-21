import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import PropertyCard from "./propertyCard";
import Alert from "./alert";
import "../styles/properties.css";
import Sidebar from "./sidebar";

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

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties-container">
      <Sidebar />
      <div className="properties">
        {properties.map((property) => (
          <div key={property._id} className="item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

export default Properties;
