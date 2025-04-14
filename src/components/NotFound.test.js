import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoadBarrier } from "@fortawesome/free-solid-svg-icons";

describe("NotFound Component", () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  test("renders the 'page under Maintenance' text", () => {
    const text = screen.getByText(/page under Maintaince/i);
    expect(text).toBeInTheDocument();
  });
});
