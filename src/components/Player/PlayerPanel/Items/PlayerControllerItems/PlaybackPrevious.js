export default function PlaybackPrevious({ handleClick }) {
  return (
    <div className="flex items-center">
      <div className="flex justify-center w-12">
        <sl-button onClick={handleClick}>
          <sl-icon name="skip-start"></sl-icon>
        </sl-button>
      </div>
    </div>
  );
}
