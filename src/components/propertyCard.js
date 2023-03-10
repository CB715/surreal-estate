import React from "react";
import PropTypes from "prop-types";

import "../styles/property-card.css";

const PropertyCard = (props) => {
  const { title, type, bedrooms, bathrooms, price, city, email } = props;
  return (
    <div className="property-card">
      <h2 className="property-card__title">{title}</h2>
      <p className="property-card__type">Type: {type}</p>
      <p className="property-card__bathrooms">Bathrooms: {bathrooms}</p>
      <p className="property-card__bedrooms">Bedrooms: {bedrooms}</p>
      <p className="property-card__price">Price: {price}</p>
      <p className="property-card__city">City: {city}</p>
      <a className="property-card__email" href={`mailto:${email}`}>
        Contact
      </a>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
