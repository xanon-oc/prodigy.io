"use client";
import SignUpForm from "@/components/SignUpForm";
import React from "react";

const page = () => {
  return (
    <main className="relative">
      <div className="container relative z-10 text-gray-600 sm:px-4 md:px-8">
        {/* component  */}
        <div className="h-screen md:flex">
          <div className="relative overflow-hidden md:flex  w-1/2 bg-inherit justify-around items-center">
            <div>
              <h1 className="text-white font-bold text-4xl font-sans">
                GoFinance
              </h1>
              <p className="text-white mt-1">
                The most popular peer to peer lending at SEA
              </p>
              <button
                type="submit"
                className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
              >
                Read More
              </button>
            </div>
          </div>
          {/* form */}
          <div className="flex md:w-1/2 justify-center py-10 items-center bg-inherit">
            <div className="border p-14 rounded-2xl">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background:
            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
        }}
      ></div>
    </main>
  );
};

export default page;
