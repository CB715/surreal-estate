import React, { useEffect, useState } from "react";

const Properties = () => {
  const initialState = {
    properties: [],
  };
  const [properties, setProperties] = useState(initialState.properties);

  useEffect(() => {}, []);

  return (
    <>
      <div className="properties">Properties Page</div>;
    </>
  );
};

export default Properties;
