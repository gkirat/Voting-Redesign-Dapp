import React from "react";
import Navigation from "./Navigation";

const Dashboard = () => {
  return (
    <div className="flex  h-[100%]  space-x-12 ">
      <Navigation />

      <div className=" p-4 w-full flex space-x-20 dark:text-slate-50">
        <div className=" w-[60%] h-[100%] p-4 " id="UserVotingStatus">
          <div className="   w-[100%] h-[50%] rounded-lg p-2 bg-white dark:bg-slate-950 dark:shadow-cyan-500/50 shadow">
            <h1>List of Candidates</h1>
          </div>
        </div>

        <div className=" w-[35%] h-[100%] p-4 flex flex-col space-y-10 " id="UserVotingStatus">

          <div className="   w-[90%] h-[30%] rounded-lg p-4 bg-white dark:bg-slate-950  dark:shadow-cyan-500/50 space-x-3 shadow space-y-6   " >

            <div className="flex items-center ">
              <svg className="w-20 " xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="22" fill="#999" opacity="0.5" />
                
                <circle cx="50" cy="50" r="20" fill="#2ABB94">
                  <animate attributeName="r" values="20;15;20" dur="5s" repeatCount="indefinite" />
                </circle>
              </svg>
              <h1 className=" text-xl font-medium ">Election Status</h1>
            </div>

            <div className="flex space-x-20 items-center">
                <div className=" bg-[#4263EB] p-2 rounded-md whitespace-nowrap ">Start time</div>
                <div className=" bg-[#F784AD] p-2 rounded-md whitespace-nowrap ">End time</div>
            </div>

          </div>

          <div className="   w-[90%] h-[30%] rounded-lg p-2 bg-white dark:bg-slate-950 dark:shadow-cyan-500/50 shadow">
            <h1>Voter Info</h1>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// <div className="   w-[70%] h-[20%] rounded-md p-2 bg-white dark:bg-slate-950 dark:shadow-cyan-500/50 shadow">
// <h1>Hello world</h1>
// </div>


//             {/* <svg className=" w-16 top-0 shadow-inner " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
//               <path d="M55,7.5c-22,0-40.2,16.8-42.3,38.3h-6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h32.4c1.6,0,3-0.9,3.7-2.3l3.5-6.8 L57,65.8c0.7,1.4,2.1,2.3,3.7,2.3c1.6,0,3-0.9,3.7-2.3l6-11.7h6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2h-8.5 c-1.6,0-3,0.9-3.7,2.3l-3.5,6.8L50,34.2c-1.4-2.8-6-2.8-7.4,0l-6,11.7H21.1c2.1-16.9,16.5-30,33.9-30c18.8,0,34.2,15.3,34.2,34.2 S73.8,84.2,55,84.2c-14.2,0-26.5-8.8-31.6-21.2h-8.9 C20,80.1,36.1,92.5,55,92.5c23.4,0,42.5-19.1,42.5-42.5 C97.5,26.6,78.4,7.5,55,7.5z" fill="#2ABB94"/>
//             </svg> */}
//             {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
//   <path
//     d="M55,7.5c-22,0-40.2,16.8-42.3,38.3h-6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h32.4c1.6,0,3-0.9,3.7-2.3l3.5-6.8 L57,65.8c0.7,1.4,2.1,2.3,3.7,2.3c1.6,0,3-0.9,3.7-2.3l6-11.7h6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2h-8.5 c-1.6,0-3,0.9-3.7,2.3l-3.5,6.8L50,34.2c-1.4-2.8-6-2.8-7.4,0l-6,11.7H21.1c2.1-16.9,16.5-30,33.9-30c18.8,0,34.2,15.3,34.2,34.2 S73.8,84.2,55,84.2c-14.2,0-26.5-8.8-31.6-21.2h-8.9 C20,80.1,36.1,92.5,55,92.5c23.4,0,42.5-19.1,42.5-42.5 C97.5,26.6,78.4,7.5,55,7.5z"
//     fill="none"
//     stroke="#2ABB94"
//     stroke-width="2"
//   >
//     <animate
//       attributeName="stroke-dasharray"
//       values="200 100;0 100;0 100"
//       dur="3s"
//       repeatCount="indefinite"
//     />
//   </path>
// </svg> */}
// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
//   <circle cx="50" cy="50" r="45" fill="none" stroke="#2ABB94" stroke-width="2" />
//   <path
//     d="M55,7.5c-22,0-40.2,16.8-42.3,38.3h-6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h32.4c1.6,0,3-0.9,3.7-2.3l3.5-6.8 L57,65.8c0.7,1.4,2.1,2.3,3.7,2.3c1.6,0,3-0.9,3.7-2.3l6-11.7h6c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2h-8.5 c-1.6,0-3,0.9-3.7,2.3l-3.5,6.8L50,34.2c-1.4-2.8-6-2.8-7.4,0l-6,11.7H21.1c2.1-16.9,16.5-30,33.9-30c18.8,0,34.2,15.3,34.2,34.2 S73.8,84.2,55,84.2c-14.2,0-26.5-8.8-31.6-21.2h-8.9 C20,80.1,36.1,92.5,55,92.5c23.4,0,42.5-19.1,42.5-42.5 C97.5,26.6,78.4,7.5,55,7.5z"
//     fill="none"
//     stroke="none"
//   >
//     <animate
//       attributeName="stroke"
//       values="#2ABB94;transparent;transparent"
//       dur="3s"
//       repeatCount="indefinite"
//     />
//   </path>
// </svg>