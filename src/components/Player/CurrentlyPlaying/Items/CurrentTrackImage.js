import React from "react";

export default function UserImage({ src }) {
  if (src) {
    return (
      <img
        className="object-cover object-center h-56"
        width="100%"
        height="100%"
        alt="Current Song Img"
        src={src}
      />
    );
  } else {
    return (
      <img
        className="object-cover object-center h-56"
        src={"https://i.imgur.com/AtMhw8m.png"}
        width="100%"
        height="100%"
        alt="Current Song Img"
      />
    );
  }
}
