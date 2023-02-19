import React from "react";
import { render } from "@testing-library/react";

import PropertyCard from "../components/propertyCard";

describe("Property Card", () => {
  const property = {
    title: "A test property",
    type: "Flat",
    bathrooms: 1,
    bedrooms: 1,
    price: "£1500",
    city: "Leeds",
    email: "test@test.com",
  };

  it("renders the property card", () => {
    const { asFragment } = render(
      <PropertyCard
        title={property.title}
        type={property.type}
        bathrooms={property.bathrooms}
        bedrooms={property.bedrooms}
        price={property.price}
        city={property.city}
        email={property.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
