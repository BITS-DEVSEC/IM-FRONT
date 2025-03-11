import React, { useRef } from "react";
import Buna from "/buna.svg";

const Otp: React.FC = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target;
    const value = target.value;

    if (value) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (index > 0) {
        inputsRef.current[index].value = "";
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === "Delete") {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index].value = "";
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <main className="min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex justify-center">
          <div className="w-full max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl  ">
            {/* Progress Bar */}
            <div className="flex justify-center mb-8 ml-13">
              <ol className="flex items-center w-3/4 align-middle">
                <li className="flex w-full items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block after:border-yellow-800">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full text-white lg:h-8 lg:w-8 bg-yellow-800 shrink-0">
                    1
                  </span>
                </li>
                <li className="flex w-full items-center after:content-[''] after:w-full after:h-0.5 after:border-b after:border-2 after:inline-block after:border-gray-300">
                  <span className="text-white flex items-center justify-center w-6 h-6 rounded-full lg:h-8 lg:w-8 shrink-0 bg-gray-300 text-gray-600 bg-yellow-800">
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
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src={Buna}
                className="mx-auto h-20 w-auto"
              />
            </div>
            <br />
            <br />
            <header className="mb-8">
              <h1 className="text-xl md:text-2xl font-bold mb-1">
                Fayda Verification
              </h1>
              <p className="text-sm md:text-[15px] text-slate-500">
                Enter the 4-digit verification code that was sent to your phone
                number.
              </p>
            </header>
            <form id="otp-form">
              <div className="flex items-center justify-center gap-2 md:gap-3">
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-10 h-10 md:w-14 md:h-14 text-center text-xl md:text-2xl font-extrabold text-slate-900 bg-slate-100 border-none hover:border-none appearance-none rounded p-2 md:p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    pattern="\d*"
                    maxLength={1}
                    ref={(el) => {
                      inputsRef.current[index] = el!;
                    }}
                    onChange={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onFocus={handleFocus}
                  />
                ))}
              </div>
              <div className="max-w-[200px] md:max-w-[260px] mx-auto mt-4">
                <a
                  href="/confirm-password"
                  className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-yellow-800 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                >
                  Next
                </a>
              </div>
            </form>
            <div className="text-sm text-slate-500 mt-4">
              Didn't receive code?{" "}
              <a
                className="font-medium text-yellow-950 hover:text-indigo-600"
                href="#0"
              >
                Resend
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Otp;
