// src/components/ToDoList.jsx
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggleComplete, onDelete, onEdit }) {
  return (
    <div className="mt-4">
      {todos.map(todo => (
        <ToDoItem 
          key={todo.id} 
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;
