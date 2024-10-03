import React from "react";
import { useNavigate } from "react-router-dom";

const Form4 = () => {
  const navigate = useNavigate();
  return (
    <div className="end h-[100vh] overflow-hidden bg-zinc-200">
      <form className="flex flex-col">
        <div className="w-full h-[100vh] overflow-hidden flex f4main">
          <div className="f3img w-[40%] ">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-[60%] flex justify-center items-center flex-col gap-10">
            <h1 className="f4head text-5xl font-bold text-center">
              Thank you <br /> for your contribution
            </h1>
            <button
              className="py-2 px-5 bg-pink-500 text-white rounded active:scale-105"
              onClick={() => navigate("/")}
            >
              Back Home Page
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form4;
