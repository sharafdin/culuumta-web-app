"use client";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#1A263D] w-full py-10 lg:py-24 lg:px-25 lg:grid-cols-6 px-10 grid h-screen gap-5">
      <div>
        <h1 className="mb-4 text-[#10b981] text-2xl font-bold">NEW</h1>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          App
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          IRA
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-[#10b981] text-2xl font-bold">SUPPORT</h1>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          FAQ
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Step by Step
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Instructions
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          contact
        </p>
      </div>
      <div>
        <h1 className="mb-4 text-[#10b981] text-2xl font-bold">LEGAL</h1>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          SEC Filings
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Terms & Conditions
        </p>
        <p className="text-gray-500 mb-3 cursor-pointer hover:text-[#10b981]">
          Privacy Policy
        </p>
      </div>

      <div className="flex justify-center items-center gap-10 flex-col md:flex-row ">
        <FaFacebook className=" text-gray-500  text-4xl hover:text-[#10b981] cursor-pointer" />
        <FaTwitter className=" text-gray-500 text-4xl hover:text-[#10b981]  cursor-pointer" />
        <FaLinkedin className=" text-gray-500  text-4xl hover:text-[#10b981]  cursor-pointer" />
      </div>

      <div className="flex flex-col col-span-2 lg:ml-10 items-start -mt-5 mb-3">
        <Image
          className="text-[#1A263D] "
          src="/assets/svg/logo/icon.svg"
          alt="Muraajaco-logo-icon-dark"
          width={80}
          height={80}
        />
        <h1 className="mb-4 text-[#10b981] text-2xl font-bold">Culuumta</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          cupiditate totam ut corporis! Id ea eaque repudiandae quidem pariatur
          officiis temporibus.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
