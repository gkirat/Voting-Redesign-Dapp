import Login from "./pages/Login";
// import Navigation from "./pages/Navigation";
import Nav from "./pages/Nav";
import Dashboard from "./pages/Dashboard";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
// import {useState } from 'react';


import "./App.css";

const router = createBrowserRouter([
  {path:"/",element:<Login/>},
  {path:"/Dashboard",element:<Dashboard />}
])

function App() {



  return ( 
  
    <div className="bg-slate-50 w-full h-screen dark:bg-slate-800  overflow-hidden">
      
      <Nav />
      {/* <Login /> */}
      {/* <Login walletStatus={walletStatus} /> */}
      {/* <Login walletStatus={walletStatus} walletConnected={walletConnected}  /> */}
      <RouterProvider router={router} />

    </div>

  );
}

export default App;

// w-12
// h-6
// rounded-full
// p-1
// bg-gray-400
// dark:bg-gray-600
// relative
// transition-colors
// duration-500
// ease-in
// focus:outline-none
// focus:ring-2
// focus:ring-blue-700
// dark:focus:ring-blue-600
// focus:border-transparent

// bg-black text-white rounded-md p-2 hover:bg-stone-700 top-5 right-8


//   <RouterProvider router={router} />


// FIRST WE HAVE MAKE SECRUTY THAT WHEN USER LOGINS IN THAN ONLY HE CAN ACCESS THE DASHBOARD PAGE OR THE HOME PAGE WHILE TYPING URL
// const [walletConnected,setWalletConnected] = useState(false)

// function walletStatus(status){
//   setWalletConnected(status)
//   return walletConnected
// }

//<button className=" bg-[#4263EB] p-3 rounded-md text-white hover:bg-[#4e6dec] shadow-2xl shadow-[#4e6dec] transition-all ease-in-out">Connected to Wallet</button>