import { Response, Request } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "title" | "description">;
    const todo: ITodo = new Todo({
      title: body.title,
      description: body.description,
      isCompleted: false,
    });
    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();
    res
      .status(201)
      .json({ message: "Todo added", todo: newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

const updateTodoStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const { isCompleted } = req.body as Pick<ITodo, "isCompleted">;

    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        isCompleted,
      }
    );

    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo updated",
      todo: updatedTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(
      req.params.id
    );
    const allTodos: ITodo[] = await Todo.find();
    res.status(200).json({
      message: "Todo deleted",
      todo: deletedTodo,
      todos: allTodos,
    });
  } catch (err) {
    throw err;
  }
};

export { getTodos, addTodo, updateTodoStatus, deleteTodo };
