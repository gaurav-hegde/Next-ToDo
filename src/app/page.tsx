import { prisma } from "@/db";
import Link from "next/link";
import { ToDoItem } from "@/components/ToDoItem";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">ToDo App</h1>
        <Link
          className="border border-slate-400 text-slate-400 px-2 py-1 rounded hover:bg-slate-800 hover:text-white focus-within:bg-slate-400 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <ToDoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
