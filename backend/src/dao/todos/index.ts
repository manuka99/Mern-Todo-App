import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";

const fetchAllTodos = async (): Promise<ITodo[]> => {
  const todos: ITodo[] = await Todo.find();
  return todos;
};

const saveTodo = async (
  todoData: Pick<ITodo, "title" | "description">
): Promise<ITodo> => {
  const todo: ITodo = new Todo({
    ...todoData,
    isCompleted: false,
  });
  const newItem: ITodo = await todo.save();
  return newItem;
};

const updateTodoStatus = async (
  _id: string,
  isCompleted: boolean
): Promise<ITodo | null> => {
  const updatedItem: ITodo | null = await Todo.findByIdAndUpdate(
    { _id },
    {
      isCompleted,
    },
    {
      new: true,
    }
  );
  return updatedItem;
};

const deleteTodo = async (_id: string): Promise<ITodo | null> => {
  const deletedItem: ITodo | null = await Todo.findByIdAndDelete(_id);
  return deletedItem;
};

export { fetchAllTodos, saveTodo, updateTodoStatus, deleteTodo };
