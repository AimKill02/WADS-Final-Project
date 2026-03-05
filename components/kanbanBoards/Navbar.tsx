"use client"

import { useState } from "react"

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-6 py-3 border-b bg-white">
      {/* App name */}
      <div className="text-lg font-semibold">
        Boardside
      </div>

      {/* Profile section */}
      <div className="relative">
        <button
          data-testid="profile-button"
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center"
        >
          U
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow">
            <ul className="text-sm">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>

              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>

              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}