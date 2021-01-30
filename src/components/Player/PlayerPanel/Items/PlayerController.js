import { useSession } from "next-auth/client";
import axios from "axios";
import React, { useState, useEffect } from "react";

import PlaybackNext from "./PlayerControllerItems/PlaybackNext";
import PlaybackPause from "./PlayerControllerItems/PlaybackPause";
import PlaybackPrevious from "./PlayerControllerItems/PlaybackPrevious";
import PlaybackResume from "./PlayerControllerItems/PlaybackResume";
import PlaybackShuffle from "./PlayerControllerItems/PlaybackShuffle";
import PlaybackRepeat from "./PlayerControllerItems/PlaybackRepeat";

export default function CurrentSong({ isPlaying, isShuffle, isRepeat }) {
  const [session] = useSession();

  const pausePlayback = () => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/pause",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resumePlayback = () => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/play",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nextPlayback = () => {
    axios
      .post(
        "https://api.spotify.com/v1/me/player/next",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const previousPlayback = () => {
    axios
      .post(
        "https://api.spotify.com/v1/me/player/previous",
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const shuffleToggle = () => {
    if (isShuffle) {
      axios
        .put(
          "https://api.spotify.com/v1/me/player/shuffle",
          {},
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
            params: {
              state: false,
            },
          }
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(
          "https://api.spotify.com/v1/me/player/shuffle",
          {},
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
            params: {
              state: true,
            },
          }
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const repeatToggle = () => {
    if (isRepeat === "off") {
      axios
        .put(
          "https://api.spotify.com/v1/me/player/repeat",
          {},
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
            params: {
              state: "context",
            },
          }
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (isRepeat === "context") {
      axios
        .put(
          "https://api.spotify.com/v1/me/player/repeat",
          {},
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
            params: {
              state: "track",
            },
          }
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .put(
          "https://api.spotify.com/v1/me/player/repeat",
          {},
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
            params: {
              state: "off",
            },
          }
        )
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (isPlaying) {
    return (
      <div className="flex items-center flex-1 justify-evenly">
        <PlaybackShuffle handleClick={shuffleToggle} shuffleState={isShuffle} />
        <PlaybackPrevious handleClick={previousPlayback} />
        <PlaybackPause handleClick={pausePlayback} />
        <PlaybackNext handleClick={nextPlayback} />
        <PlaybackRepeat handleClick={repeatToggle} repeatState={isRepeat} />
      </div>
    );
  }

  if (!isPlaying) {
    return (
      <div className="flex items-center flex-1 justify-evenly">
        <PlaybackShuffle handleClick={shuffleToggle} shuffleState={isShuffle} />
        <PlaybackPrevious handleClick={previousPlayback} />
        <PlaybackResume handleClick={resumePlayback} />
        <PlaybackNext handleClick={nextPlayback} />
        <PlaybackRepeat handleClick={repeatToggle} repeatState={isRepeat} />
      </div>
    );
  }
}
