export default function ({ handleClick, track }) {
  return (
    <sl-menu-item id="play" onClick={handleClick}>
      Play<sl-icon slot="prefix" name="play-fill"></sl-icon>
    </sl-menu-item>
  )
}
