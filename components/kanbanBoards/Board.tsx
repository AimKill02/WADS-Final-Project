type Card = {
  id: string
  title: string
}

type Column = {
  id: string
  title: string
  cards: Card[]
}

type BoardProps = {
  boardId: string
}

const mockColumns: Column[] = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      { id: "1", title: "Read Chapter 3" },
      { id: "2", title: "Finish Math Exercises" },
    ],
  },
  {
    id: "doing",
    title: "In Progress",
    cards: [
      { id: "3", title: "Review Lecture Notes" },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      { id: "4", title: "Setup Study Planner" },
    ],
  },
]

export default function Board({ boardId }: BoardProps) {
  return (
    <div>
      <div className="flex gap-6 overflow-x-auto">
        {mockColumns.map((column) => (
          <div
            key={column.id}
            className="w-64 bg-gray-100 rounded-lg p-4"
          >
            <h2 className="font-semibold mb-3">{column.title}</h2>

            <div className="space-y-2">
              {column.cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-3 rounded shadow"
                >
                  {card.title}
                </div>
              ))}
            </div>

            <button className="mt-3 text-sm text-blue-500">
              + Add Card
            </button>
          </div>
        ))}

        <button className="w-64 border-2 border-dashed rounded-lg p-4">
          + Add Column
        </button>
      </div>
    </div>
  )
}