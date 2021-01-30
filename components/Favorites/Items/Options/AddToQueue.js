export default function AddToQueue({ handleClick, track }) {
  return (
    <sl-menu-item onClick={handleClick}>
      Add to queue<sl-icon slot="prefix" name="plus"></sl-icon>
    </sl-menu-item>
  )
}
