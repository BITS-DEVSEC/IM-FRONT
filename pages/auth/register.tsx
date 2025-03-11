import React, { useState } from "react";
import Buna from "/buna.svg";

const Register: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
        <div className="w-full max-w-xs sm:max-w-sm">
          {/* Progress Bar */}
          <div className="flex justify-center">
            <ol className="flex items-center w-3/4 align-middle ml-15">
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block after:border-gray-300 after:border-2 after:inline-block  ">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-white lg:h-8 lg:w-8 bg-yellow-800 shrink-0">
                  1
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block after:border-gray-300">
                <span className="flex items-center justify-center w-6 h-6 rounded-full lg:h-8 lg:w-8 shrink-0 bg-gray-300 text-gray-600">
                  2
                </span>
              </li>
              <li className="flex items-center w-full">
                <span className="flex items-center justify-center w-6 h-6 rounded-full lg:h-8 lg:w-8 shrink-0 bg-gray-300 text-gray-600">
                  3
                </span>
              </li>
            </ol>
          </div>
          <br />
          <br />
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={Buna}
              className="mx-auto h-20 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Register to Buna
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="phone_no"
                  className="block text-sm font-medium text-gray-900"
                >
                  Phone Number / FIN
                </label>
                <div className="mt-2">
                  <input
                    id="phone_no"
                    name="phone_no"
                    type="tel"
                    required
                    autoComplete="phone_no"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <a
                  href="/otp"
                  className="flex w-full justify-center rounded-md bg-yellow-800 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Next
                </a>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member? &nbsp;
              <a
                href="/login"
                className="font-semibold text-yellow-800 hover:text-yellow-700"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
