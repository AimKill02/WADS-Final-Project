/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react"
import BoardPage from "../../../../app/board/[boardId]/page"

jest.mock("@/components/kanbanBoards/Board", () => {
  return function MockBoard({ boardId }: { boardId: string }) {
    return <div>Mock Board {boardId}</div>
  }
})

describe("Board ID Page", () => {
  test("renders board component", () => {
    render(<BoardPage params={{ boardId: "1" }} />)

    expect(screen.getByText("Mock Board 1")).toBeInTheDocument()
  })
})