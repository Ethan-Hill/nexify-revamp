import React from "react";

export default function UserName({ name }) {
  return (
    <div className="px-6 py-4 my-auto ">
      <h1 className="text-2xl font-semibold text-center text-white dark:text-gray-700 ">
        {name}
      </h1>
    </div>
  );
}
