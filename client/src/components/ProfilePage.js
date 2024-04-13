import React from "react";

const ProfilePage = () => {
  return (
    <div>
      <div className="profilePage flex flex-col md:flex-row justify-evenly items-center w-full h-[500px] ">
        <div className="card1 border-2 w-96 h-1/2">
          <div className="profileCard">
            <div className="profilePic"></div>
            <div className="profileName">hello</div>
            <div className="username">hello2</div>
          </div>
        </div>
        <div className="card2 w-full ml-5">
          <div className="generalInfo border-2 h-1/2">
            <h1>General Info</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
            dolor?
          </div>
          <div className="otherInfo border-2 mt-10 h-1/3">
            <h1>Other Info</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            vero tempora suscipit, molestiae autem sequi laudantium quod
            expedita nulla quis earum et rerum quibusdam inventore vel
            repellendus nostrum asperiores adipisci.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

// <h1 className="flex defaultStyle font-bold justify-center items-center h-20 uppercase text-4xl">
//           User Profile
//         </h1>
//         <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//           <div className="bg-white p-8 rounded shadow-md w-96 flex">
//             <div className="mr-8">
//               <img
//                 src={props.image}
//                 alt="Avatar"
//                 className="w-40 h-40 m-5 rounded-full"
//               />
//             </div>
//             <div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">
//                   Username:
//                 </label>
//                 <p className="text-gray-800">{props.username}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">
//                   Name:
//                 </label>
//                 <p className="text-gray-800">{props.username}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">
//                   Email:
//                 </label>
//                 <p className="text-gray-800">{props.email}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">
//                   Bio:
//                 </label>
//                 <p className="text-gray-800">{props.bio}</p>
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-bold mb-2">
//                   Location:
//                 </label>
//                 <p className="text-gray-800">{props.location}</p>
//               </div>
//             </div>
//           </div>
//         </div>
