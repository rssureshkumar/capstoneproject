import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SpecialsMenu from "./SpecialsMenu";

describe("SpecialsMenu Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <SpecialsMenu />
      </Router>
    );
  });


  test("renders all menu items with details", () => {

    // Check if 'Order a Delivery' text is displayed under each item
    expect(screen.getByText(/This week specials!/i)).toBeInTheDocument();
  });
});
