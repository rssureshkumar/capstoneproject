import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";

describe("Main Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Main />
      </Router>
    );
  });

  test("renders HeroSection, SpecialsMenu, Testimonials, and About", () => {
    expect(screen.getByText(/This week specials!/i)).toBeInTheDocument();
  });
});
