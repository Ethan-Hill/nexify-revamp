import Logo from "./Items/Drawer/Items/Logo"
import Logout from "./Items/Drawer/Items/Logout"
import Playlists from "./Items/Drawer/Items/Playlists"
import Home from "./Items/Drawer/Items/Home"
import Favorites from "./Items/Drawer/Items/Favorites"
import Settings from "./Items/Drawer/Items/Settings"

import { useRouter } from "next/router"
import { useSession } from "next-auth/client"

export default function Drawer() {
  const [session, loading] = useSession()
  const Router = useRouter()

  if (session) {
    return (
      <aside className="flex flex-col items-center justify-between w-32 bg-navigationBlue">
        <Logo />
        <div className="flex flex-col items-center">
          <Home route={Router.pathname} />
          <Favorites route={Router.pathname} />
          <Playlists route={Router.pathname} />
        </div>
        <div className="flex flex-col items-center">
          <Settings route={Router.pathname} />
          <Logout />
        </div>
      </aside>
    )
  }
  return (
    <aside className="flex flex-col items-center justify-between w-32 bg-navigationBlue">
      <Logo />
      <div className="flex flex-col items-center">
        <Home route={Router.pathname} />
        <Favorites route={Router.pathname} />
        <Playlists route={Router.pathname} />
      </div>
      <div></div>
    </aside>
  )
}
