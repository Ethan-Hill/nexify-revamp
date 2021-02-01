import { Menu, Item, Separator, Submenu } from "react-contexify"

export default function MenuComp({ playlists, handleItemClick, MENU_ID }) {
  return (
    <Menu id={MENU_ID}>
      <Item id="play" onClick={handleItemClick}>
        Play
      </Item>
      <Item id="atq" onClick={handleItemClick}>
        Add To Queue
      </Item>
      <Separator />
      <Submenu label="Add to playlist">
        {playlists.items.map((playlist) => {
          return (
            <Item
              key={playlist.id}
              id="atp"
              pid={playlist.id}
              onClick={handleItemClick}
            >
              {playlist.name}
            </Item>
          )
        })}
      </Submenu>
      <Separator />
      <Item id="delete" onClick={handleItemClick}>
        Delete
      </Item>
    </Menu>
  )
}
