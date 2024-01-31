"use client";
import { Todo } from "@/app/model/Todo.m";
import React from "react";

interface TodoItem {
  data: Todo;
  deleteTodo: (id: string) => Promise<void>;
}

const TodoItem = ({ data, deleteTodo }: TodoItem) => {
  return (
    <div className="flex w-full h-[60px] items-center justify-between bg-gray-800 p-4 rounded-md">
      <p className="capitalize">{data.description}</p>
      <button
        className="bg-red-800 text-sm font-bold py-1 px-2 rounded-md"
        onClick={() => deleteTodo(data._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
