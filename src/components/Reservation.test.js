import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Reservation from "./Reservation";

// Mock navigate from react-router-dom
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Reservation Component", () => {
  beforeEach(() => {
    render(
      <Router>
        <Reservation />
      </Router>
    );
  });

  test("renders Reservation form fields and button", () => {
    expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
  });

  test("shows validation errors for empty required fields", () => {
    const reserveButton = screen.getByRole("button", { name: /Reserve/i });
    fireEvent.click(reserveButton);

    expect(screen.getByText("* Full name required!")).toBeInTheDocument();
    expect(screen.getByText("* Email required!")).toBeInTheDocument();
    expect(screen.getByText("* Phone number required!")).toBeInTheDocument();
    expect(screen.getByText("* Please specify number of guests!")).toBeInTheDocument();
    expect(screen.getByText("* Please specify date and time!")).toBeInTheDocument();
  });

});
