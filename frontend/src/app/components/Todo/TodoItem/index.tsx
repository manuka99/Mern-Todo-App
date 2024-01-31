"use client";
import { Todo } from "@/app/model/Todo.m";
import React from "react";

interface TodoItem {
  data: Todo;
  deleteTodo: (id: string) => Promise<void>;
  completeTodo: (id: string) => Promise<void>;
}

const TodoItem = ({ data, deleteTodo, completeTodo }: TodoItem) => {
  const isCompleted = data.isCompleted;
  return (
    <div className="flex w-full min-h-[80px] items-center justify-between bg-gray-800 p-4 rounded-md gap-2">
      <div className="max-w-[80%]">
        <p
          className={`capitalize text-lg md:text-xl font-bold text-yellow-500 truncate ${
            isCompleted && "line-through text-gray-400"
          }`}
        >
          {data.title}
        </p>
        <p
          className={`capitalize text-sm break-all ${
            isCompleted && "line-through text-gray-400"
          }`}
        >
          {data.description}
        </p>
      </div>
      <div className="flex gap-2 justify-between items-center">
        {!isCompleted && (
          <button
            className="bg-green-800 text-sm font-bold py-1 px-2 rounded-md"
            onClick={() => completeTodo(data._id)}
          >
            Complete
          </button>
        )}

        <button
          className="bg-red-800 text-sm font-bold py-1 px-2 rounded-md"
          onClick={() => deleteTodo(data._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
