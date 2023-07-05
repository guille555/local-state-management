import { useEffect, useState } from "react";

import ListTodos from "./components/ListTodos.jsx";

import "./index.css";

const App = () => {

  const [listTodos, setListTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      if ((response.ok) && (response.status === 200)) {
        return response.json();
      } else {
        throw new Error("Fail to load todos!!");
      }
    })
    .then((data) => {
      setListTodos(
        data.map((item) => ({...item, completed: false}))
      );
    })
    .catch((error) => {console.log(error.message)});
  }, []);

  return (
    <>
      <ListTodos listTodos={listTodos}/>
    </>
  );
};

export default App;
