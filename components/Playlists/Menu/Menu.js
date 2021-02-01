import { Menu, Item, Separator, Submenu } from "react-contexify"

export default function MenuComp({ playlists, handleItemClick, MENU_ID }) {
  return (
    <Menu id={MENU_ID}>
      <Item id="play" onClick={handleItemClick}>
        Play
      </Item>
      <Item id="edit" onClick={handleItemClick}>
        Edit
      </Item>
      <Separator />
      <Item id="view" onClick={handleItemClick}>
        View
      </Item>
    </Menu>
  )
}
