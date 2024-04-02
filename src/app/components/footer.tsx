import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="w-full bg-[rgb(72,87,105)]  flex justify-center items-center py-3 text-white">
        <p>Back to top</p>
      </div>
      <div className="w-full text-white px-5 h-[20rem] bg-[rgb(35,47,62)] flex gap-5 justify-evenly items-center border-b border-white">
        <div className="flex flex-col gap-2">
          <h1 className="1xl font-bold">Get to Know Us</h1>
          <p className="text-sm">Careers</p>
          <p className="text-sm">Blog</p>
          <p className="text-sm">About Amazon</p>
          <p className="text-sm">Investor Relations</p>
          <p className="text-sm">Amazon Devices</p>
          <p className="text-sm">Amazon Science</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="1xl font-bold">Make Money with Us</h1>
          <p className="text-sm">Sell products on Amazon</p>
          <p className="text-sm">Sell on Amazon Business</p>
          <p className="text-sm">Sell apps on Amazon</p>
          <p className="text-sm">Become an Affiliate</p>
          <p className="text-sm">Advertise Your Products</p>
          <p className="text-sm">Self-Publish with Us</p>
          <p className="text-sm">Host an Amazon Hub</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="1xl font-bold">Get to Know Us</h1>
          <p className="text-sm">Amazon Business Card</p>
          <p className="text-sm">Shop with Points</p>
          <p className="text-sm">Reload Your Balance</p>
          <p className="text-sm">Amazon Currency Converter</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="1xl font-bold">Let Us Help You</h1>
          <p className="text-sm">Amazon and COVID-19</p>
          <p className="text-sm">Your Account</p>
          <p className="text-sm">Your Orders</p>
          <p className="text-sm">Shipping Rates & Policies</p>
          <p className="text-sm">Returns & Replacements</p>
          <p className="text-sm">Manage Your Content and Devices</p>
          <p className="text-sm">Help</p>
        </div>
      </div>
      <div className="w-full bg-[rgb(35,47,62)] h-[5rem] flex justify-center items-center gap-5 py-5 text-white">
        <div>
          <Image
            src="/amazon_logo.png"
            width="100"
            height="100"
            alt=""
            className="pt-3"
          />
        </div>
        <div className="flex justify-around gap-3">
          <p className="text-md p-3 border border-white rounded ">English</p>
          <p className="text-md p-3 border border-white rounded ">
            U.S.D-U.S Doller
          </p>
          <p className="text-md p-3 border border-white rounded ">
            United States
          </p>
        </div>
      </div>

      <div className="w-full bg-[rgb(19,26,34)] h-[25rem] flex justify-evenly items-center gap-5 py-5 text-white">
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
          <div>
            <p className="text-sm font-bold">Amazon</p>
            <p className="text-xs">Stream millions of songs</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[rgb(19,26,34)] h-[5rem] flex flex-col justify-evenly items-center gap-5 py-3 text-white">
        <div className="flex justify-around gap-3">
          <p className="text-xs">Conditions of use</p>
          <p className="text-xs">Privacy Notice</p>
          <p className="text-xs">Consumer Health Data Privacy Disclosure</p>
          <p className="text-xs">Your Ads Privacy Choices</p>
        </div>
        <p className="text-xs">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </>
  );
};

export default Footer;
