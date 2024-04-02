import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-[rgb(19,25,33)] flex justify-start items-center text-white  ">
        <div className="flex gap-1 w-[15%] sm:pl-1 ">
          <Image
            src="/amazon_logo.png"
            alt="amazon"
            width={100}
            height={50}
            className="p-2 border border-transparent hover:border-white rounded"
          />
          <div className="sm:p-3 border border-transparent hover:border-white rounded">
            <p className="text-xs float-end">Deliver to</p>
            <p className="text-md">
              <FontAwesomeIcon icon={faMapMarker} className="px-1" />
              Nepal
            </p>
          </div>
        </div>

        <div className="flex flext-start justify-center items-center  w-[55%] sm:pl-2 ">
          <select className="p-2.5 bg-[rgb(212,212,212)] text-black rounded-l">
            <option>All</option>
          </select>
          <input
            type="text"
            className="w-full p-2"
            placeholder="Search Amazon  "
          />
          <FontAwesomeIcon
            icon={faSearch}
            className=" text-black p-3 rounded-r bg-[rgb(243,168,71)]"
          />
        </div>

        <div className="flex justify-center  items-center sm:pl-4">
          <div className="text-white flex sm:gap-1 justify-center items-center border border-transparent hover:border-white rounded sm:p-3">
            <FontAwesomeIcon icon={faFlag} className="sm:px-1" />
            <p className="text-md">EN</p>
            <select className="w-3 h-3">
              <option>EN</option>
            </select>
          </div>
          <div className="border border-transparent hover:border-white rounded p-2">
            <p className="text-xs">Hello, sign in</p>
            <p className="text-md">Account & Lists</p>
          </div>
          <div className="border border-transparent hover:border-white rounded p-2">
            <p className="text-xs">Returns</p>
            <p className="text-md">&Orders</p>
          </div>
          <div className="border border-transparent hover:border-white rounded p-3">
            <FontAwesomeIcon icon={faShoppingCart} />
            Cart
          </div>
        </div>
      </nav>

      <div className="w-full h-[30px] bg-[rgb(35,47,62)] flex items-center justify-start sm:gap-5 p-4 text-white">
        <p>
          <FontAwesomeIcon icon={faBars} className="px-1 text-md font-bold" />
          All
        </p>
        <p className="text-sm">Today&apos;s Deals</p>
        <p className="text-sm">Customer Service</p>
        <p className="text-sm">Registry</p>
        <p className="text-sm">Gift Cards</p>
        <p className="text-sm">Sell</p>
      </div>
    </>
  );
};

export default Navbar;
