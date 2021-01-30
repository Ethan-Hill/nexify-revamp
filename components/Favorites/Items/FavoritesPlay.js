export default function ({ handleClick }) {
  return (
    <div className="flex items-center justify-center" onClick={handleClick}>
      <sl-icon-button
        name="play-fill"
        style={{ fontSize: "48px" }}
        label="Edit"
      ></sl-icon-button>
    </div>
  )
}
