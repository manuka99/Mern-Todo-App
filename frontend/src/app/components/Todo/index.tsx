"use client";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { deleteTodo, getTodos, saveTodo, updateTodoStatus } from "@/app/services/Todo.s";
import { Todo } from "@/app/model/Todo.m";
import { toast } from "react-toastify";

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [newTodoData, setNewTodoData] = useState<{
    title?: string;
    description?: string;
  }>();

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async (): Promise<void> => {
    try {
      setLoading(true);
      const _todos = await getTodos();
      setTodos(_todos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (): Promise<void> => {
    try {
      if (!newTodoData?.title || !newTodoData.description) {
        toast.error("Both title and description are required!");
        return;
      }
      setLoading(true);
      await saveTodo(newTodoData.title, newTodoData.description);
      toast.success("Todo was added successfully");
      setNewTodoData({ title: "", description: "" });
      fetchTodo();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteTodoFn = async (todoId: string): Promise<void> => {
    try {
      setLoading(true);
      if (!todoId) {
        toast.error("Todo Id is required!");
        return;
      }
      await deleteTodo(todoId);
      toast.success("Todo was deleted successfully");
      fetchTodo();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const completeTodoFn = async (todoId: string): Promise<void> => {
    try {
      setLoading(true);
      if (!todoId) {
        toast.error("Todo Id is required!");
        return;
      }
      await updateTodoStatus(todoId, true);
      toast.success("Todo was updated successfully");
      fetchTodo();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onChangeData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setNewTodoData({
      ...newTodoData,
      [name]: value,
    });
  };

  if (loading)
    return (
      <div className="p-4">
        <p className="text-lg font-bold text-white">Loading....</p>
      </div>
    );

  return (
    <div className="flex w-full p-2 flex-col overflow-hidden">
      {/* add todo */}
      <div className="flex gap-2 flex-col justify-evenly items-center w-full">
        <div className="flex gap-2 justify-between items-start w-full">
          <input
            type="text"
            name="title"
            id="title"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Todo Title"
            value={newTodoData?.title}
            onChange={onChangeData}
          />
          <button
            className="bg-blue-600 text-sm font-bold py-2 px-4 rounded-md"
            onClick={addTodo}
          >
            Add New Todo
          </button>
        </div>
        <textarea
          name="description"
          id="description"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Todo Description"
          value={newTodoData?.description}
          onChange={onChangeData}
          rows={3}
        />
      </div>
      {/* end add todo */}
      {/* start display todo */}
      <div className="flex flex-col gap-1 overflow-y-auto  my-4">
        {todos?.length > 0 ? (
          todos?.map((todo) => (
            <TodoItem key={todo?._id} data={todo} deleteTodo={deleteTodoFn} completeTodo={completeTodoFn} />
          ))
        ) : (
          <div className="flex w-full items-center justify-center p-4">
            <p className="text-lg md:text-xl font-bold text-yellow-200">
              No Todos Found. Start by creating your first Todo!
            </p>
          </div>
        )}
      </div>
      {/* end display todo */}
    </div>
  );
};

export default Todo;
