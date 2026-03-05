import { NextResponse } from "next/server"

export async function GET() {
  const boards = [
    { id: "1", title: "Study Planner" },
    { id: "2", title: "Project Roadmap" }
  ]

  return NextResponse.json(boards)
}