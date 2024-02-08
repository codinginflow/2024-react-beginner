import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItem({ todo, onCompletedChange }: TodoItemProps) {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
    </div>
  );
}
