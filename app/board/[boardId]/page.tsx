import Board from "@/components/kanbanBoards/Board"

type BoardPageProps = {
  params: {
    boardId: string
  }
}

export default function BoardPage({ params }: BoardPageProps) {
  const { boardId } = params

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Board ID: {boardId}
      </h1>

      <Board boardId={boardId} />
    </div>
  )
}