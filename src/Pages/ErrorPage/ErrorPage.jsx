import React from 'react'
import { Link } from 'react-router';
import Error404 from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="mt-[120px] mb-[40px] px-10 w-full md:max-w-[1440px] mx-auto text-center flex flex-col justify-center items-center">
      <img src={Error404} alt="Error 404 Page Image" />
      <h1 className="text-[48px] font-semibold leading-[60px] text-[#001931] mt-[20px]">
        Oops, page not found!
      </h1>
      <p className="text-[20px] font-normal leading-[32px] text-[#627382] mt-[10px]">
        The page you are looking for is not available.
      </p>
      <Link to="/">
        <button
          className="btn text-base shadow-none text-white font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
          border-0 flex gap-2.5 rounded-[4px] px-4 py-3 transition duration-300 ease-in transform hover:scale-105 mt-4"
        >
          Go Back!
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
