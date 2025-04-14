import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Testimonials from "./Testimonials";

describe("Testimonials Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Testimonials />
      </Router>
    );
  });

  test("renders testimonials section", () => {
    expect(screen.getByText(/Gabriella/i)).toBeInTheDocument();
  });

});
