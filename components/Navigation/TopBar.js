import Account from "./Items/TopBar/Account"
import Search from "./Items/TopBar/Search"
import SearchedTracks from "./Items/TopBar/SearchedTracks"
import axios from "axios"
import { useSession } from "next-auth/client"
import { useState } from "react"

export default function TopBar() {
  const [session] = useSession()
  const [searchedTracks, setSearchedTracks] = useState([])

  const search = async (event) => {
    await axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
        params: {
          q: event.target.attributes.value.value,
          type: "track",
          limit: 8,
        },
      })
      .then(async (resp) => {
        setSearchedTracks(resp.data.tracks.items)
      })
  }

  return (
    <div className="absolute top-0 right-0 flex items-center h-24 w-topBar">
      <div className="absolute top-0 right-0 flex flex-col items-center w-full h-full">
        <Search
          handleSearch={search}
          searchedTracks={searchedTracks}
          handleClear={() => {
            setSearchedTracks([])
          }}
        />
        <SearchedTracks searchedTracks={searchedTracks} />
      </div>
      <Account />
    </div>
  )
}
