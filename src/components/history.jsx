import React from "react";

const History = () => {
  return (
    <section className="history relative">
      <img
        className="absolute top-0 h-full object-cover object-right w-full"
        src="/images/history.jpg"
        alt=""
      />
      <div className=" relative top-1/3 m-auto p-12 h-[100vh] w-1/2 text-center text-stone-800 font-medium flex flex-col items-center justify-center bg-gray-200 ">
        <div className="w-1/2 space-y-4">
          <p className="">Since</p>
          <h1 className="text-9xl">1985</h1>
          <p className="">
            We create furniture masterpieces that tell stories and store
            memories that don’t fade with trends.
          </p>
          <button className="border-2 border-stone-800 rounded-full py-2 px-4">
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
    </section>
  );
};

export default History;
