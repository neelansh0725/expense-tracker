import React from "react";

export const Profile = () => {
  return (
    <div>
      <div className="flex space-x-4">
        <div className="w-1/4">
          <img src="/profileimage.png" alt="" />
        </div>
        <div className="w-3/4 flex flex-col justify-center">
          <h3 className="text-xl">Neelansh</h3>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  );
};
