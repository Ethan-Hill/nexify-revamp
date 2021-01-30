import { useEffect } from "react";
export default function PlaybackPause({ handleClick }) {
  return (
    <div className="flex items-center ">
      <div className="flex justify-center w-12">
        <sl-button size="large" onClick={handleClick}>
          <sl-icon name="pause"></sl-icon>
        </sl-button>
      </div>
    </div>
  );
}
