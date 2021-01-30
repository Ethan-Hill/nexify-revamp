import React from "react";
import CurrentTrackInfo from "../../CurrentlyPlaying/Items/CurrentTrackInfo";

export default function CurrentSong({ src, name, artists }) {
  const artist_names = artists.map((artist) => artist.name).join(", ");

  return (
    <div className="flex items-center flex-1 md:hidden">
      <img
        className="object-cover object-center h-16 ml-5"
        width="64px"
        height="64px"
        src={src}
        alt="Current Song Panel Image"
      />
      ;
      <div className="flex flex-col justify-start ml-2">
        <h1 className="font-semibold text-white text-md dark:text-gray-700 ">
          {name}
        </h1>
        <div className="flex items-center">
          <h1 className="text-white text-md dark:text-gray-700 ">
            {artist_names}
          </h1>
          <CurrentTrackInfo />
        </div>
      </div>
    </div>
  );
}
