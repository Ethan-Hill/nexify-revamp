import React from "react";

export default function UserActivity({ type }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="flex items-center justify-center w-full py-3 bg-gray-900">
      <h1 className="mx-3 text-lg font-semibold text-white">
        {capitalizeFirstLetter(type)}
      </h1>
    </div>
  );
}
