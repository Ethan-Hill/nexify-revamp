export default function PlaybackShuffle({ handleClick, repeatState }) {
  if (repeatState === "off") {
    return (
      <div className="flex items-center">
        <div className="flex justify-center w-12">
          <sl-button type="default" onClick={handleClick}>
            <sl-icon name="arrow-repeat"></sl-icon>
          </sl-button>
        </div>
      </div>
    );
  } else if (repeatState === "context") {
    return (
      <div className="flex items-center">
        <div className="flex justify-center w-12">
          <sl-button type="warning" onClick={handleClick}>
            <sl-icon name="arrow-repeat"></sl-icon>
          </sl-button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <div className="flex justify-center w-12">
          <sl-button type="success" onClick={handleClick}>
            <sl-icon name="arrow-repeat"></sl-icon>
          </sl-button>
        </div>
      </div>
    );
  }
}
