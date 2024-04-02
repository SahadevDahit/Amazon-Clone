import React from "react";

const Personalized_section = () => {
  return (
    <>
      <div
        className="w-full mt-[4rem] flex justify-center items-center p-3 h-[12rem] bg-white shadow-md"
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="py-[3rem] border rounded w-full flex flex-col items-center justify-center gap-3">
          <div>
            <p className="text-xs">See personalized recommendations</p>
            <p className="text-xs font-bold py-2 px-5 rounded bg-yellow-400 flex justify-center">
              Sign in
            </p>
            <p className="text-xs">New customer? Start here.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalized_section;
