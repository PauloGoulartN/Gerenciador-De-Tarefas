import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

// ARMAZENAR LOCAL STORAGE TASK
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     // CHAMAR A API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       },
  //     );
  //     // PEGAR DADOS QUE ELA RETORNA
  //     const data = await response.json();

  //     // Armazenar/persistir dados no state
  //     setTasks(data);

  //   };
  //   // fetchTasks();
  // }, []);

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

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
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
