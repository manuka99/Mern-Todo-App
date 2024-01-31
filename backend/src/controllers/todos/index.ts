import { Response, Request, NextFunction } from "express";
import { ITodo } from "../../types/todo";
import { sendSuccess } from "../../common/util";
import * as TodoDao from "../../dao/todos";

const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const todos: ITodo[] = await TodoDao.fetchAllTodos();
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
    const newItem: ITodo = await TodoDao.saveTodo(body);
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
    const id: string = req.params.id;
    const { isCompleted } = req.body as Pick<ITodo, "isCompleted">;

    const updatedItem: ITodo | null = await TodoDao.updateTodoStatus(
      id,
      isCompleted
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
    const todoId = req.params.id;
    const deletedItem: ITodo | null = await TodoDao.deleteTodo(todoId);
    sendSuccess(res, {
      message: "Todo deleted",
      deletedItem,
    });
  } catch (error) {
    next(error);
  }
};

export { getTodos, addTodo, updateTodoStatus, deleteTodo };
