import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

const renderWithRouter = (ui) => render(<Router>{ui}</Router>);

describe("Footer Component", () => {
  beforeEach(() => {
    renderWithRouter(<Footer />);
  });

  test("renders footer logo", () => {
    const logo = screen.getByAltText(/Little Lemon Logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders Contact section with address, phone, and email", () => {
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument();
    expect(screen.getByText(/Connect with us/i)).toBeInTheDocument();
  });
});
