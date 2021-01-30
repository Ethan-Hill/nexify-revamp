import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React from "react";
import wrapCustomElement from "@shoelace-style/react-wrapper";

const CurrentSong = dynamic(() => import("./Items/CurrentSong"));
const PlayerController = dynamic(() => import("./Items/PlayerController"));
const PlayerVolume = dynamic(() => import("./Items/PlayerVolume"));

export default function PlayerPanel({ track, device }) {
  const Router = useRouter();

  const handleRoute = () => {
    Router.push(link);
  };

  return (
    <div className="fixed bottom-0 w-screen h-24 bg-backgroundBlue dark:bg-white ">
      <div className="flex w-full h-full sm:justify-center">
        <CurrentSong
          src={track.item.album.images[0].url}
          name={track.item.name}
          artists={track.item.artists}
        />
        <PlayerController
          isPlaying={track.is_playing}
          isShuffle={track.shuffle_state}
          isRepeat={track.repeat_state}
        />

        <PlayerVolume amount={device.volume_percent} />
      </div>
    </div>
  );
}
