import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// 🔧 Define helper function for rendering with specific route
const renderWithRoute = (route) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );

describe("App Routing", () => {

  test("renders Reservation component on /reservation route", () => {
    renderWithRoute("/reservation");
    expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
  });

  test("renders Confirmed component on /confirmed route", () => {
    renderWithRoute("/confirmed");
    expect(screen.getByText(/Your reservation is confirmed/i)).toBeInTheDocument();
  });

  test("renders NotFound component on unknown route", () => {
    renderWithRoute("/some-unknown-page");
    expect(screen.getByText(/page under Maintaince/i)).toBeInTheDocument();
  });
});
