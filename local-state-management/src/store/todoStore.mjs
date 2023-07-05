import { create } from "zustand";

export const useStore = create((set, get) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({
      ...state,
      todos: [...state.todos, {...todo}]
    }));
    console.log("todo added!!", get().todos);
  },
  removeTodo: (id) => {
    set((state) => ({
      ...state,
      todos: [...state.todos.filter((todo) => (todo.id !== id))]
    }))
    console.log("todo removed!!", get().todos);
  }
}));