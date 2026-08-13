import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

// ARMAZENAR STATE TASK
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      tittle: "Estudar React",
      description: "Estudar React para aprender a criar aplicações web",
      isCompleted: false,
    },
    {
      id: 2,
      tittle: "Estudar Node.js",
      description: "Estudar Node.js para aprender a criar aplicações web",
      isCompleted: false,
    },
    {
      id: 3,
      tittle: "Estudar postgreSQL",
      description: "Estudar postgreSQL para aprender a criar aplicações web",
      isCompleted: false,
    },
  ]);

  // FUNÇÃO PARA ALTERAR O ESTADO DA TASK
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      // se a task.id for igual ao taskId, ele vai retornar uma nova task com o isCompleted invertido
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // equivalente a um else, caso a condição não seja satisfeita, ele vai retornra a task original
      return task;
    });
    setTasks(newTask);
  }

  //FUNÇÃO PARA DELETAR TASK
  function deleteTaskOnclick(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onAddTaskSubmit(tittle, description) {
    const newTask = {
      id: v4(),
      tittle,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTaskOnClick={deleteTaskOnclick}
        />
      </div>
    </div>
  );
}
export default App;
