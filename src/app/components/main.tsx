import React from "react";
import Image from "next/image";
import Deals from "./deals";
import Footer from "./footer";

const Main = () => {
  // Sample data representing gaming accessories
  const accessoriesData = [
    {
      title: "Gaming accessory 1",
      imageUrl: "/31aJyAdILmL._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 2",
      imageUrl: "/31aJyAdILmL._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 3",
      imageUrl: "/31aJyAdILmL._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 4",
      imageUrl: "/31aJyAdILmL._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 1",
      imageUrl: "/41bvMGlDk4L._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 2",
      imageUrl: "/41bvMGlDk4L._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 3",
      imageUrl: "/41bvMGlDk4L._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 4",
      imageUrl: "/41bvMGlDk4L._SR140,140_.jpg",
    },
    {
      title: "Gaming accessory 1",
      imageUrl: "/61netzbPw4L._SR140,140_.png",
    },
    {
      title: "Gaming accessory 2",
      imageUrl: "/61netzbPw4L._SR140,140_.png",
    },
    {
      title: "Gaming accessory 3",
      imageUrl: "/61netzbPw4L._SR140,140_.png",
    },
    {
      title: "Gaming accessory 4",
      imageUrl: "/61netzbPw4L._SR140,140_.png",
    },
  ];

  return (
    <>
      <main className="w-full min-h-[100vh] relative ">
        <div className="absolute w-full">
          <Image
            src="/51nVYKEaNTL._SR412,360_.jpg"
            width="300"
            height="800"
            alt="awsome"
            className="object-fit h-[20rem] sm:h-[30rem] w-full"
          />
        </div>

        <div className="w-full absolute top-[20rem]">
          <div className=" w-full h-full p-5   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-5">
            {accessoriesData.map((accessory, index) => (
              <div
                key={index}
                className="bg-white rounded h-[20rem] shadow-md grid grid-cols-1 gap-2 p-4"
              >
                <h1 className="text-1xl font-bold">{accessory.title}</h1>
                <Image
                  width="220"
                  height="200"
                  src={accessory.imageUrl}
                  alt="image"
                  className="mx-auto"
                />
                <p className="text-xs text-blue-700">See more</p>
              </div>
            ))}
          </div>
          <Deals />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Main;
