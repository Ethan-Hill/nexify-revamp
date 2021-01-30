import dynamic from "next/dynamic";
import React from "react";

const UserImage = dynamic(() => import("./User/UserImage.js"));
const UserLocaton = dynamic(() => import("./User/UserFlag.js"));
const UserName = dynamic(() => import("./User/UserName.js"));
const UserEmail = dynamic(() => import("./User/UserEmail.js"));
const UserActivity = dynamic(() => import("./User/UserActivity.js"));
const UserAccountButton = dynamic(() => import("./User/UserAccountButton.js"));
const Logout = dynamic(() => import("../Auth/Logout"));

export default function UserInfo({ user }) {
  return (
    <div className="my-4 overflow-hidden transition duration-500 ease-in-out transform rounded-lg shadow-2xl bg-backgroundBlue dark:bg-white hover:scale-105">
      <div className="flex w-full h-64 lg:h-full lg:w-64 lg:flex-col lg:justify-center ">
        <UserImage src={user.profile} />
        {/* <UserActivity type={user.profile.product} /> */}

        <UserName name={user.name} />
        <div className="px-6 my-auto ">
          <UserEmail email={user.email} />
          <UserLocaton location={user.profile.country} />
        </div>
        <div className="flex flex-wrap items-center justify-around py-6 mx-6 w-144 lg:flex-col lg:mx-0 lg:w-full">
          <UserAccountButton url={user.profile.external_urls.spotify} />
          <Logout />
        </div>
      </div>
    </div>
  );
}
