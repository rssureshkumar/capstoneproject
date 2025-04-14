import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Component", () => {
  test("renders heading and location", () => {
    render(<About />);

    // Test for the main heading
    expect(screen.getByRole("heading", { name: /Little Lemon/i })).toBeInTheDocument();

    // Test for location subheading
    expect(screen.getByText(/Michigan/i)).toBeInTheDocument();
  });

  test("renders description text", () => {
    render(<About />);
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  test("renders both chef images with correct alt text", () => {
    render(<About />);
    
    expect(screen.getByAltText("Chef cooking at restaurant")).toBeInTheDocument();
    expect(screen.getByAltText("Two Chef's smiling")).toBeInTheDocument();
  });
});
