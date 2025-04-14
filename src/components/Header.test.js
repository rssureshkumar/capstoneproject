import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

const renderWithRouter = (ui) => render(<Router>{ui}</Router>);

describe("Header Component", () => {
  beforeEach(() => {
    renderWithRouter(<Header />);
  });

  test("renders logo image with alt text", () => {
    const logo = screen.getByAltText(/Little Lemon Logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders Home link", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("renders About link", () => {
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/");
  });

  test("renders Menu link", () => {
    const menuLink = screen.getByRole("link", { name: /menu/i });
    expect(menuLink).toBeInTheDocument();
    expect(menuLink).toHaveAttribute("href", "/404");
  });

  test("renders Reservation link", () => {
    const reservationLink = screen.getByRole("link", { name: /reservation/i });
    expect(reservationLink).toBeInTheDocument();
    expect(reservationLink).toHaveAttribute("href", "/reservation");
  });

  test("renders Login link", () => {
    const loginLink = screen.getByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/404");
  });

  test("renders Order Online CTA", () => {
    const orderLink = screen.getByRole("link", { name: /order online/i });
    expect(orderLink).toBeInTheDocument();
    expect(orderLink).toHaveAttribute("href", "/404");
  });
});
