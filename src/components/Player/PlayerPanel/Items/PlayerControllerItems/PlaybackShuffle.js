export default function PlaybackShuffle({ handleClick, shuffleState }) {
  if (shuffleState) {
    return (
      <div className="flex items-center">
        <div className="flex justify-center w-12">
          <sl-button type="success" onClick={handleClick}>
            <sl-icon name="shuffle"></sl-icon>
          </sl-button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <div className="flex justify-center w-12">
          <sl-button type="default" onClick={handleClick}>
            <sl-icon name="shuffle"></sl-icon>
          </sl-button>
        </div>
      </div>
    );
  }
}
