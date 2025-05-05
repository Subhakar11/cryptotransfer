// import React from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";





// import logo from "../../images/logo.png";

// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

// const Navbar = () => {





//   const [toggleMenu, setToggleMenu] = React.useState(false);





//   const navigate = useNavigate();
//   const [cookies, removeCookie] = useCookies([]);
//   const [username, setUsername] = useState("");
//   useEffect(() => {
//     const verifyCookie = async () => {
//       if (!cookies.token) {
//         navigate("/login");
//       }
//       const { data } = await axios.post(
//         "http://localhost:4000",
//         {},
//         { withCredentials: true }
//       );
//       const { status, user } = data;
//       setUsername(user);
//       return status
//         ? toast(`Hello ${user}`, {
//           position: "top-right",
//         })
//         : (removeCookie("token"), navigate("/login"));
//     };
//     verifyCookie();
//   }, [cookies, navigate, removeCookie]);
//   const Logout = () => {
//     removeCookie("token");
//     navigate("/signup");
//   };

//   return (
//     <nav className="w-full flex md:justify-center justify-between items-center p-4">
//       <div className="md:flex-[0.5] flex-initial justify-center items-center">
//       <Link to={"/"}> <img src={logo} alt="logo" className="w-32 cursor-pointer" /></Link> 
//       </div>
//       <ul className="text-blue md:flex hidden list-none flex-row justify-between items-center flex-initial">
//         {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
//           <NavBarItem key={item + index} title={item} />
//         ))}
//         <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//           <Link to={"/signup"}>SignUp</Link>
//         </li>
//         <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//           <Link to={"/login"}>LogIn</Link>
//         </li>
//       </ul>
//       {/* <div className="home_page">
//         <h4>
//           {" "}
//           Welcome <span>{username}</span>
//         </h4>
//         <button onClick={Logout}>LOGOUT</button>
//       </div>
//       <ToastContainer /> */}


//       <div className="flex relative">
//         {!toggleMenu && (
//           <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
//         )}
//         {toggleMenu && (
//           <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
//         )}
//         {toggleMenu && (
//           <ul
//             className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
//             flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
//           >
//             <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
//             {["Market", "Exchange", "Tutorials", "Wallets"].map(
//               (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
//             )}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












// import React, { useEffect, useState } from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import logo from "../../images/logo.png";

// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const navigate = useNavigate();
//   const [cookies, removeCookie] = useCookies([]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const verifyCookie = async () => {
//       if (!cookies.token) return; // No token, skip verification
//       try {
//         const { data } = await axios.post(
//           "http://localhost:4000",
//           {},
//           { withCredentials: true }
//         );
//         const { status, user } = data;
//         if (status) {
//           setUsername(user);
//         } else {
//           removeCookie("token");
//         }
//       } catch (err) {
//         console.error("Cookie verification failed:", err);
//         removeCookie("token");
//       }
//     };
//     verifyCookie();
//   }, [cookies, removeCookie]);

//   const Logout = () => {
//     removeCookie("token");
//     setUsername("");
//     navigate("/login");
//   };

//   return (
//     <nav className="w-full flex md:justify-center justify-between items-center p-4">
//       <div className="md:flex-[0.5] flex-initial justify-center items-center">
//         <Link to={"/"}>
//           <img src={logo} alt="logo" className="w-32 cursor-pointer" />
//         </Link>
//       </div>

//       <ul className="text-blue md:flex hidden list-none flex-row justify-between items-center flex-initial">
//         {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
//           <NavBarItem key={item + index} title={item} />
//         ))}
//         {username ? (
//           <>
//             <li className="text-white mx-4">Welcome, {username}</li>
//             <li
//               className="bg-red-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-red-700"
//               onClick={Logout}
//             >
//               Logout
//             </li>
//           </>
//         ) : (
//           <>
//             <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//               <Link to={"/signup"}>SignUp</Link>
//             </li>
//             <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//               <Link to={"/login"}>LogIn</Link>
//             </li>
//           </>
//         )}
//       </ul>

//       <div className="flex relative">
//         {!toggleMenu && (
//           <HiMenuAlt4
//             fontSize={28}
//             className="text-white md:hidden cursor-pointer"
//             onClick={() => setToggleMenu(true)}
//           />
//         )}
//         {toggleMenu && (
//           <AiOutlineClose
//             fontSize={28}
//             className="text-white md:hidden cursor-pointer"
//             onClick={() => setToggleMenu(false)}
//           />
//         )}
//         {toggleMenu && (
//           <ul
//             className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
//             flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
//           >
//             <li className="text-xl w-full my-2">
//               <AiOutlineClose onClick={() => setToggleMenu(false)} />
//             </li>
//             {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
//               <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
//             ))}
//             {username ? (
//               <>
//                 <li className="text-white my-2">Welcome, {username}</li>
//                 <li
//                   className="bg-red-500 py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-red-700"
//                   onClick={Logout}
//                 >
//                   Logout
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="bg-[#2952e3] py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
//                   <Link to={"/signup"}>SignUp</Link>
//                 </li>
//                 <li className="bg-[#2952e3] py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
//                   <Link to={"/login"}>LogIn</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





// import React, { useEffect, useState } from "react";
// import { HiMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// import logo from "../../images/logo.png";

// const NavBarItem = ({ title, classprops }) => (
//   <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const navigate = useNavigate();
//   const [cookies, setCookie, removeCookie] = useCookies(["token"]);
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const verifyCookie = async () => {
//       if (!cookies.token) return;
//       try {
//         const { data } = await axios.post(
//           "http://localhost:4000",
//           {},
//           { withCredentials: true }
//         );
//         const { status, user } = data;
//         if (status) {
//           setUsername(user);
//         } else {
//           removeCookie("token");
//         }
//       } catch (err) {
//         console.error("Cookie verification failed:", err);
//         removeCookie("token");
//       }
//     };
//     verifyCookie();
//   }, [cookies.token, removeCookie]);

//   const Logout = () => {
//     removeCookie("token");
//     setUsername("");
//     navigate("/");
//   };

//   return (
//     <nav className="w-full flex md:justify-center justify-between items-center p-4">
//       <div className="md:flex-[0.5] flex-initial justify-center items-center">
//         <Link to={"/"}>
//           <img src={logo} alt="logo" className="w-32 cursor-pointer" />
//         </Link>
//       </div>

//       <ul className="text-blue md:flex hidden list-none flex-row justify-between items-center flex-initial">
//         {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
//           <NavBarItem key={item + index} title={item} />
//         ))}

//         {username ? (
//           <>
//             <li className="text-white mx-4">Welcome, {username}</li>
//             <li
//               className="bg-red-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-red-700"
//               onClick={Logout}
//             >
//               Logout
//             </li>
//           </>
//         ) : (
//           <>
//             <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//               <Link to={"/signup"}>SignUp</Link>
//             </li>
//             <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
//               <Link to={"/login"}>LogIn</Link>
//             </li>
//           </>
//         )}
//       </ul>

//       <div className="flex relative">
//         {!toggleMenu && (
//           <HiMenuAlt4
//             fontSize={28}
//             className="text-white md:hidden cursor-pointer"
//             onClick={() => setToggleMenu(true)}
//           />
//         )}
//         {toggleMenu && (
//           <AiOutlineClose
//             fontSize={28}
//             className="text-white md:hidden cursor-pointer"
//             onClick={() => setToggleMenu(false)}
//           />
//         )}
//         {toggleMenu && (
//           <ul
//             className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
//             flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
//           >
//             <li className="text-xl w-full my-2">
//               <AiOutlineClose onClick={() => setToggleMenu(false)} />
//             </li>
//             {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
//               <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
//             ))}
//             {username ? (
//               <>
//                 <li className="text-white my-2">Welcome, {username}</li>
//                 <li
//                   className="bg-red-500 py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-red-700"
//                   onClick={Logout}
//                 >
//                   Logout
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="bg-[#2952e3] py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
//                   <Link to={"/signup"}>SignUp</Link>
//                 </li>
//                 <li className="bg-[#2952e3] py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
//                   <Link to={"/login"}>LogIn</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "https://cryptotransferbackend.onrender.com",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
        } else {
          setUsername("");
          removeCookie("token");
        }
      } catch (err) {
        console.error("Cookie verification failed:", err);
        setUsername("");
        removeCookie("token");
      }
    };

    if (cookies.token) {
      verifyCookie();
    }
  }, [cookies.token, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    setUsername("");
    navigate("/");
  };

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>

      <ul className="text-blue md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}

        {username ? (
          <>
            <li className="text-white mx-4">Welcome, {username}</li>
            <li
              className="bg-red-500 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-red-700"
              onClick={Logout}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
              <Link to={"/signup"}>SignUp</Link>
            </li>
            <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
              <Link to={"/login"}>LogIn</Link>
            </li>
          </>
        )}
      </ul>

      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
              <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />
            ))}
            {username ? (
              <>
                <li className="text-white my-2">Welcome, {username}</li>
                <li
                  className="bg-red-500 py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-red-700"
                  onClick={Logout}
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <li className="bg-[#2952e3] py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                  <Link to={"/signup"}>SignUp</Link>
                </li>
                <li className="bg-[#2952e3] py-2 px-7 my-2 rounded-full cursor-pointer hover:bg-[#2546bd]">
                  <Link to={"/login"}>LogIn</Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
