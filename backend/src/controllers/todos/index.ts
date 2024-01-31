import { Response, Request, NextFunction } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo";
import { sendSuccess } from "../../common/util";

const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    sendSuccess(res, todos);
  } catch (error) {
    next(error);
  }
};

const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "title" | "description">;
    const todo: ITodo = new Todo({
      title: body.title,
      description: body.description,
      isCompleted: false,
    });
    const newItem: ITodo = await todo.save();
    sendSuccess(res, {
      message: "Todo added",
      newItem,
    });
  } catch (error) {
    next(error);
  }
};

const updateTodoStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = req.params.id;
    const { isCompleted } = req.body as Pick<ITodo, "isCompleted">;

    const updatedItem: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        isCompleted,
      },
      {
        new: true,
      }
    );

    sendSuccess(res, {
      message: "Todo updated",
      updatedItem,
    });
  } catch (error) {
    next(error);
  }
};

const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const deletedItem: ITodo | null = await Todo.findByIdAndDelete(
      req.params.id
    );
    sendSuccess(res, {
      message: "Todo deleted",
      deletedItem,
    });
  } catch (error) {
    next(error);
  }
};

export { getTodos, addTodo, updateTodoStatus, deleteTodo };
