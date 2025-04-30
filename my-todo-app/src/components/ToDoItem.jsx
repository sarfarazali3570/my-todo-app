// src/components/ToDoItem.jsx
function ToDoItem({ todo, onToggleComplete, onDelete, onEdit }) {
    return (
      <div className="flex justify-between items-center p-2 border-b">
        <div>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => onToggleComplete(todo.id)} 
            className="mr-2"
          />
          <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
        </div>
        <div>
          <button onClick={() => onEdit(todo.id)} className="mr-2 text-yellow-600">Edit</button>
          <button onClick={() => onDelete(todo.id)} className="text-red-600">Delete</button>
        </div>
      </div>
    );
  }
  
  export default ToDoItem;
  