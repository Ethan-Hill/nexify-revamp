export default function PlaylistPlay({ handleClick }) {
  return (
    <div className="flex items-center justify-center" onClick={handleClick}>
      <sl-icon-button
        name="play-fill"
        style={{ fontSize: "48px", color: "#00D56E" }}
        label="Edit"
      ></sl-icon-button>
    </div>
  )
}
