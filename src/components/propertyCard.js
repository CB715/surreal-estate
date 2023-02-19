import React from "react";
import PropTypes from "prop-types";

import "../styles/property-card.css";

const PropertyCard = (props) => {
  const { title, type, bedrooms, bathrooms, price, city, email } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Price: {price}</p>
      <p>City: {city}</p>
      <p>Contact: {email}</p>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
