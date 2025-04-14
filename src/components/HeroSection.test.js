import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./HeroSection";

describe("HeroSection Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <HeroSection />
      </Router>
    );
  });

  test("renders HeroSection with text and image", () => {
    expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
    expect(screen.getByText(/Michigan/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve a table/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Restaurant Food Platter/i)).toBeInTheDocument();
  });
});
