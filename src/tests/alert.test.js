import React from "react";
import { render } from "@testing-library/react";

import Alert from "../components/alert";

describe("alert", () => {
  it("displays the alert error message", () => {
    render(<Alert />);
  });
});
