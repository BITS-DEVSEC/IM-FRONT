import React from "react";
import Buna from "/buna_norm.svg";
import BunaWhite from "/buna_white.svg";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
        <div className="w-full max-w-xs sm:max-w-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={Buna}
              className="mx-auto h-20 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
              Reset your password
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
