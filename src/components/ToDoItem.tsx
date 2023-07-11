type TodoItemProps = {
  id: string;
  title: string;
  complete: Boolean;
};

export function ToDoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-400"
      >
        {title}
      </label>
    </li>
  );
}
