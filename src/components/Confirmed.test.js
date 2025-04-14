import { render, screen } from "@testing-library/react";
import Confirmed from "./Confirmed";

describe("Confirmed Component", () => {

  test("renders thank you message", () => {
    render(<Confirmed />);
    expect(
      screen.getByText(/Your reservation is confirmed/i)
    ).toBeInTheDocument();
  });
});
