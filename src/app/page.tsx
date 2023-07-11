import Link from "next/link";

export default function Home() {
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
      <ul></ul>
    </>
  );
}
