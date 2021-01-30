import dynamic from "next/dynamic";
import React from "react";

const CurrentTrackImage = dynamic(() => import("./Items/CurrentTrackImage"));
const CurrentTrackName = dynamic(() => import("./Items/CurrentTrackName"));

export default function CurrentlyPlaying({ track }) {
  return (
    <div className="my-4 overflow-hidden transition duration-500 ease-in-out transform rounded-lg shadow-2xl bg-backgroundBlue dark:bg-white hover:scale-105">
      <div className="flex flex-col w-64 h-full ">
        <CurrentTrackImage src={track.item.album.images[0].url} />
        <CurrentTrackName name={track.item.name} />
      </div>
    </div>
  );
}
