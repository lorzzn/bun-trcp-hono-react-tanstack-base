import { createFileRoute, Link } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: () => {
    return (
      <div>
        <div className="flex flex-col">
          <Link to="/todo">Todo</Link>
        </div>
      </div>
    )
  },
})
