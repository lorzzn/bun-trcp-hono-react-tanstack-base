import { trpc } from "@/utils/trpcClient"
import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"

export const Route = createFileRoute("/todo/")({
  component: RouteComponent,
})

function RouteComponent() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      return trpc.generatedAppRouter.todo.findManyTodo.query({})
    },
  })

  const [content, setContent] = useState("")

  const submitTodo = async () => {
    if (!content) {
      return
    }

    await trpc.generatedAppRouter.todo.createOneTodo.mutate({
      data: {
        content,
      },
    })
    await refetch()
    setContent("")
  }

  const deleteTodo = async (id: number) => {
    await trpc.generatedAppRouter.todo.deleteOneTodo.mutate({
      where: {
        id,
      },
    })
    await refetch()
  }

  return (
    <div>
      <h1 className="font-bold text-2xl">Todo</h1>
      {isLoading && <div>Loading...</div>}
      <div className="space-x-2">
        <input
          type="text"
          className="border"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="cursor-pointer" onClick={submitTodo}>
          Add
        </button>
      </div>
      <div>
        {data?.map((item) => {
          return (
            <div className="flex items-center space-x-2">
              <div>{item.content}</div>
              <button className="cursor-pointer text-red-500" onClick={() => deleteTodo(item.id)}>
                X
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
