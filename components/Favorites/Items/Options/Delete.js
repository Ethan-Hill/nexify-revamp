export default function Delete({ handleClick, track }) {
  return (
    <sl-menu-item onClick={handleClick}>
      Delete
      <sl-icon slot="prefix" name="x"></sl-icon>
    </sl-menu-item>
  )
}
