import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonR } from "./Button.jsx";

function Tasks({ tasks, onTaskClick, deleteTaskOnClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-2 p-6 bg-slate-700 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={
              "bg-slate-900 text-left w-full flex items-center gap-2 text-white p-2 rounded-md " +
              (task.isCompleted ? "bg-emerald-500 line-through" : "bg-slate-900")
            }
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <ButtonR
            onClick={() => deleteTaskOnClick(task.id)} // Adicionei a função de deletar task
          >
            <TrashIcon />
          </ButtonR>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
