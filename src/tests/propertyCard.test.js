import React from "react";
import { render } from "@testing-library/react";

import PropertyCard from "../components/propertyCard";

describe("Property Card", () => {
  const validProps = {
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
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct props", () => {
    const { getByText } = render(<PropertyCard {...validProps} />);

    expect(getByText(validProps.title)).toBeInTheDocument();
    expect(getByText(`Type: ${validProps.type}`)).toBeInTheDocument();
    expect(getByText(`Bathrooms: ${validProps.bathrooms}`)).toBeInTheDocument();
    expect(getByText(`Bedrooms: ${validProps.bedrooms}`)).toBeInTheDocument();
    expect(getByText(`Price: ${validProps.price}`)).toBeInTheDocument();
    expect(getByText(`City: ${validProps.city}`)).toBeInTheDocument();
    expect(getByText(`Contact: ${validProps.email}`)).toBeInTheDocument();
  });
});
