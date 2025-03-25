// import React from "react";
// import Buna from "/buna_norm.svg";
// import BunaWhite from "/buna_white.svg";
// import { ModeToggle } from "@/components/mode-toggle";

// const Login: React.FC = () => {
//   return (
//     <>
//       <header className="flex h-16 shrink-0 items-center gap-2 px-4">
//         <ModeToggle />
//       </header>
//       <div className="flex items-center justify-center min-h-screen px-4 sm:px-0">
//         <div className="w-full max-w-xs sm:max-w-sm">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img
//               alt="Your Company"
//               src={Buna}
//               className="mx-auto h-20 w-auto dark:hidden"
//             />
//             <img
//               alt="Your Company"
//               src={BunaWhite}
//               className="mx-auto h-20 w-auto hidden dark:block"
//             />

//             <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
//               Sign in to your account
//             </h2>
//           </div>

//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// <form action="#" method="POST" className="space-y-6">
//   <div>
//     <label
//       htmlFor="email"
//       className="block text-sm font-medium text-gray-900 dark:text-gray-100"
//     >
//       Phone Number / FIN
//     </label>
//     <div className="mt-2">
//       <input
//         id="phone_no"
//         name="phone_no"
//         type="tel"
//         required
//         autoComplete="phone_no"
//         className="block w-full rounded-md bg-white dark:bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-800 sm:text-sm"
//       />
//     </div>
//   </div>

//   <div>
//     <div className="flex items-center justify-between">
//       <label
//         htmlFor="password"
//         className="block text-sm font-medium text-gray-900 dark:text-gray-100"
//       >
//         Password
//       </label>
//       <div className="text-sm">
//         <a
//           href="/forgot-password"
//           className="font-semibold text-yellow-500 hover:text-yellow-600"
//         >
//           Forgot password?
//         </a>
//       </div>
//     </div>
//     <div className="mt-2">
//       <input
//         id="password"
//         name="password"
//         type="password"
//         required
//         autoComplete="current-password"
//         className="block w-full rounded-md bg-white dark:bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-800 sm:text-sm"
//       />
//     </div>
//   </div>

//   <div>
//     <a
//       href="/dashboard"
//       className="flex w-full justify-center rounded-md bg-yellow-800 dark:bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//     >
//       Login
//     </a>1
//   </div>
// </form>

//             <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-100">
//               Not a member?{""} &nbsp;
//               <a
//                 href="/register"
//                 className="font-semibold text-yellow-800 dark:text-yellow-500 hover:text-yellow-700"
//               >
//                 Register
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from "react";
import AuthLayout from "@/layouts/AuthLayout"; 
import Buna from "/buna_norm.svg";
import BunaWhite from "/buna_white.svg";
import LoginIcons from "@/components/LoginIcons";

const Login: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement login logic here
  };

  return (
    <>
      <AuthLayout>
        <LoginIcons title="Login to your account">
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
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Phone Number / Email
              </label>
              <div className="mt-2">
                <input
                  id="phone_no"
                  name="phone_no"
                  type="tel"
                  required
                  autoComplete="phone_no"
                  className="block w-full rounded-md bg-white dark:bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/forgot-password"
                    className="font-semibold text-yellow-500 hover:text-yellow-600"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white dark:bg-gray-200 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-900 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-800 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <a
                href="/user/dashboard"
                className="flex w-full justify-center rounded-md bg-yellow-800 dark:bg-yellow-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </a>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-100">
            Dont Have An Account?{""} &nbsp;
            <a
              href="/choose"
              className="font-semibold text-yellow-800 dark:text-yellow-500 hover:text-yellow-700"
            >
              Register
            </a>
          </p>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
