import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">New Item</h1>
      </header>
      <form className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-400 bg-transparent rounded px-2 py-1"
        />
        <div className="flex gap-1 justify-end">
          <Link
            className="border border-slate-400 text-slate-400 px-2 py-1 rounded hover:bg-slate-800 hover:text-white focus-within:bg-slate-400 outline-none"
            href=".."
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-400 text-slate-400 px-2 py-1 rounded hover:bg-slate-800 hover:text-white focus-within:bg-slate-400 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
