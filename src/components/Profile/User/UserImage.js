import React from "react";

export default function UserImage({ src }) {
  if (src.images[0]) {
    return (
      <img
        className="object-cover object-center lg:h-58 sm:h-56"
        src={src.images[0].url}
      />
    );
  } else {
    return (
      <img
        className="object-cover object-center lg:h-58 sm:h-56"
        src={"https://i.imgur.com/AtMhw8m.png"}
      />
    );
  }
}
