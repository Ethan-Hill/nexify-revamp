import React from "react";

export default function DrawerItem({ user }) {
  return (
    <div className="flex items-center justify-center w-full h-16 mb-6">
      {
        //Check if message failed
        user.image ? (
          <img
            src={user.image}
            alt="UserImage"
            className="h-16 mr-2 rounded-full"
            width="64px"
            height="64px"
          />
        ) : null
      }
      <h1 className="ml-2 text-lg font-semibold">Welcome {user.name}</h1>
    </div>
  );
}
