import React from "react";
import { render } from "@testing-library/react";

import Alert from "../components/alert";

describe("alert", () => {
  it("displays the alert error message", () => {
    const alert = render(<Alert message="Error!" />);
    const errorMessage = alert.getByText("Error!");

    expect(errorMessage.textContent).toBe("Error!");
  });
  it("displays the alert success message", () => {
    const alert = render(<Alert message="Success!" success />);
    const errorMessage = alert.getByText("Success!");

    expect(errorMessage.textContent).toBe("Success!");
  });
  it("does not render a message if props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
