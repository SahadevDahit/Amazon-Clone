import React from "react";
import Image from "next/image";
import Personalized_section from "./personalized_section";

const Deals = () => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl p-2 sm:p-2 font-bold">Deals Under $25</h1>
        <div className=" w-full h-[20rem]  grid grid-cols-1 sm:grid-cols-4 gap-5 p-4">
          <div className="bg-white rounded h-[21rem] shadow-md">
            <div className="flex justify-center items-center bg-[rgb(247,248,248)]">
              <Image
                width="220"
                height="200"
                src="/217Arq+nObL._SR140,140_.jpg"
                alt="image"
                className="mx-auto py-2"
              />
            </div>
            <div className="p-2">
              <div className="flex gap-3">
                <p className="text-sm p-1 bg-red-600 rounded text-white">
                  32% off
                </p>
                <p className="text-xs text-red-500">Limited time deal</p>
              </div>
              <p>
                $19.02 List price <del>$27.99</del>
              </p>
              <p className="text-xs">Raising mentally strong</p>
            </div>
          </div>
          <div className="bg-white rounded h-[21rem] shadow-md">
            <Image
              width="220"
              height="200"
              src="/3170xCVr26L._SR140,140_.jpg"
              alt="image"
              className="mx-auto py-2"
            />
            <div className="p-2">
              <div className="flex gap-3">
                <p className="text-sm p-1 bg-red-600 rounded text-white">
                  32% off
                </p>
                <p className="text-xs text-red-500">Limited time deal</p>
              </div>
              <p>
                $19.02 List price <del>$27.99</del>
              </p>
              <p className="text-xs">Raising mentally strong</p>
            </div>
          </div>
          <div className="bg-white rounded h-[21rem] shadow-md">
            <Image
              width="220"
              height="200"
              src="/31hqkoNqvTL._SR140,140_.jpg"
              alt="image"
              className="mx-auto py-2"
            />
            <div className="p-2">
              <div className="flex gap-3">
                <p className="text-sm p-1 bg-red-600 rounded text-white">
                  32% off
                </p>
                <p className="text-xs text-red-500">Limited time deal</p>
              </div>
              <p>
                $19.02 List price <del>$27.99</del>
              </p>
              <p className="text-xs">Raising mentally strong</p>
            </div>
          </div>
          <div className="bg-white rounded h-[21rem] shadow-md">
            <Image
              width="220"
              height="200"
              src="/312z6VjcSmL._SR140,140_.jpg"
              alt="image"
              className="mx-auto py-2"
            />
            <div className="p-2">
              <div className="flex gap-3">
                <p className="text-sm p-1 bg-red-600 rounded text-white">
                  32% off
                </p>
                <p className="text-xs text-red-500">Limited time deal</p>
              </div>
              <p>
                $19.02 List price <del>$27.99</del>
              </p>
              <p className="text-xs">Raising mentally strong</p>
            </div>
          </div>
        </div>
        <Personalized_section />
      </div>
    </>
  );
};

export default Deals;
