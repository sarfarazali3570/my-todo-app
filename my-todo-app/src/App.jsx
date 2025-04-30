import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (newTask.trim() === "") return;
    if (editId) {
      setTodos(todos.map(todo => 
        todo.id === editId ? { ...todo, text: newTask } : todo
      ));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
    }
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    const toEdit = todos.find(todo => todo.id === id);
    setNewTask(toEdit.text);
    setEditId(id);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-4 bg-white shadow-md rounded-lg">
        <Header />
        <div className="flex mb-4">
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Enter a task" 
            className="flex-1 border p-2 mr-2"
          />
          <button onClick={addTodo} className="bg-blue-500 text-white px-4">
            {editId ? "Update" : "Add"}
          </button>
        </div>
        <ToDoList 
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;


