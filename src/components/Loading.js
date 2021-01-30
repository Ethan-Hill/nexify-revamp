import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <sl-spinner
        style={{ fontSize: "16rem", "--stroke-width": "10px" }}
      ></sl-spinner>
    </div>
  );
}
