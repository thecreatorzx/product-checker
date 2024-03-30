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
