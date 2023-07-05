import { useStore } from "../store/todoStore.mjs";

import Button from "./Button.jsx";

import "./Todo.css";

const Todo = ({ todo }) => {

  const { addTodo, removeTodo } = useStore();

  const handleAddTodo = () => {
    todo.completed = true;
    addTodo(todo);
  };

  const handleRemoveTodo = () => {
    todo.completed = false;
    removeTodo(todo.id);
  };

  return (
    <div className="todo">
      <p className="todoTitle">
        {todo.title}
      </p>
      {
        (!todo.completed) ?
          (<Button text="Add todo" handleClick={handleAddTodo}/>) :
          (<Button text="Remove todo" handleClick={handleRemoveTodo}/>)
      }
    </div>
  );
};

export default Todo;
