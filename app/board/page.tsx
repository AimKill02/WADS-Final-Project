import Link from "next/link"

type Board = {
  id: string
  title: string
}

const mockBoards: Board[] = [
  { id: "1", title: "Study Planner" },
  { id: "2", title: "Project Roadmap" },
]

export default function BoardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Your Boards</h1>

      <div className="grid grid-cols-2 gap-4">
        {mockBoards.map((board) => (
          <Link
            key={board.id}
            href={`/${board.id}`}
            className="border rounded-lg p-4 hover:bg-gray-50"
          >
            {board.title}
          </Link>
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        + Create Board
      </button>
    </div>
  )
}