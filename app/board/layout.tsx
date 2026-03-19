import NavBar from "@/components/kanbanBoards/Navbar"

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  )
}