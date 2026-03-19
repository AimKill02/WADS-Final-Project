import { render, screen } from "@testing-library/react";
import BoardsPage from "../../../app/board/page"

describe("Boards Page", () => {
  it("renders the boards page title", () => {
    render(<BoardsPage />);

    const title = screen.getByText(/boards/i);
    expect(title).toBeInTheDocument();
  });

  it("renders create board button", () => {
    render(<BoardsPage />);

    const button = screen.getByRole("button", { name: /create board/i });
    expect(button).toBeInTheDocument();
  });
});