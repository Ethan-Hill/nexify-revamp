export default function PlaybackNext({ handleClick }) {
  return (
    <div className="flex items-center">
      <div className="flex justify-center w-12">
        <sl-button onClick={handleClick}>
          <sl-icon name="skip-end"></sl-icon>
        </sl-button>
      </div>
    </div>
  );
}
