import * as axios from "axios";
import { Todo } from "../model/Todo.m";
const getTodos = async (): Promise<Todo[]> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await axios.default.get(`${API_URL}/todos`);
  const data = res.data;
  const todos = data?.data as Todo[];
  return todos;
};

const saveTodo = async (title: string, description: string): Promise<void> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  await axios.default.post(`${API_URL}/todo`, {
    title,
    description,
  });
};

const updateTodoStatus = async (
  todoId: string,
  isCompleted: boolean
): Promise<void> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  await axios.default.put(`${API_URL}/todo/${todoId}`, {
    isCompleted,
  });
};

const deleteTodo = async (todoId: string): Promise<void> => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  await axios.default.delete(`${API_URL}/todo/${todoId}`);
};

export { getTodos, saveTodo, updateTodoStatus, deleteTodo };
