import Todo from "./Todo.jsx";

import "./ListTodos.css";

const ListTodos = ({ listTodos }) => {
  return (
    <div className="listTodos">
      {
        listTodos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo}/>
          );
        })
      }
    </div>
  );
};

export default ListTodos;
