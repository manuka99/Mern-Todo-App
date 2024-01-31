"use client";
import Todo from "./components/Todo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-start justify-center">
      <div className="flex max-w-[700px] w-full h-[100%] flex flex-col justify-center items-center gap-4">
        <div className="flex w-full h-full flex flex-col items-center">
          <p className="text-3xl md:text-5xl font-bold my-6 text-green-400">My Todos</p>
          <Todo />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
