import React, { useState } from "react";
import Buna from "/buna_norm.svg";
import BunaWhite from "/buna_white.svg";
import AuthLayout from "@/layouts/AuthLayout";
import LoginIcons from "@/components/LoginIcons";

const ConfirmPassword: React.FC = () => {
  return (
    <>
      <AuthLayout>
        {/* Progress Bar */}
        <div className="flex justify-center">
          <ol className="flex items-center w-3/4 align-middle ml-15">
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block  after:border-yellow-500 ">
              <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-white lg:h-8 lg:w-8 bg-yellow-800  dark:bg-yellow-600 shrink-0">
                1
              </span>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block  after:border-yellow-500 ">
              <span className="text-white flex items-center justify-center w-6 h-6 rounded-full lg:h-8 lg:w-8 shrink-0  text-gray-600 bg-yellow-800  dark:bg-yellow-600">
                2
              </span>
            </li>
            <li className="flex items-center w-full">
              <span className="text-white flex items-center justify-center w-6 h-6 rounded-full lg:h-8 lg:w-8 shrink-0   text-gray-600  bg-yellow-800  dark:bg-yellow-600">
                3
              </span>
            </li>
          </ol>
        </div>
        <br />
        <br />
        <LoginIcons title=" Last step to set your password">
          <img
            alt="Your Company"
            src={Buna}
            className="mx-auto h-20 w-auto dark:hidden"
          />
          <img
            alt="Your Company"
            src={BunaWhite}
            className="mx-auto h-20 w-auto hidden dark:block"
          />
        </LoginIcons>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="phone_no"
                className="block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone_no"
                className="block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <a
                href="/done"
                className="flex w-full justify-center rounded-md bg-yellow-800 dark:bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Finish
              </a>
            </div>
          </form> 
        </div>
      </AuthLayout>
    </>
  );
};

export default ConfirmPassword;
