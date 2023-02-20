import React, { useEffect, useState } from "react";
import axios from "axios";

const Properties = () => {
  const initialState = {
    properties: [],
    alert: {
      message: "",
    },
  };
  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    async function getProperties() {
      try {
        const response = await axios.get(
          "http://localhost:4000/api-docs/PropertyListing"
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
  }, []);

  return (
    <div>
      <div className="properties">Properties Page</div>
    </div>
  );
};

export default Properties;
