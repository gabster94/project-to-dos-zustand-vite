// store.js
import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({ todos: [...state.todos, { text, completed: false }] })),
  toggleTodo: (index) =>
    set((state) => {
      const todos = [...state.todos];
      todos[index].completed = !todos[index].completed;
      return { todos };
    }),
}));
