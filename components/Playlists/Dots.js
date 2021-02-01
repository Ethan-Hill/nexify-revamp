export default function Dots({ playlist, displayMenu }) {
  return (
    <sl-icon-button
      name="three-dots-vertical"
      onClick={displayMenu}
      key={playlist.id}
      id={playlist.id}
      label="Edit"
      style={{ fontSize: "30px" }}
    ></sl-icon-button>
  )
}
