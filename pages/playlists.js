import { getSession, useSession } from "next-auth/client"
import { useToasts } from "react-toast-notifications"
import { useRouter } from "next/router"
import { Menu, Item, Separator, Submenu, useContextMenu } from "react-contexify"
import "react-contexify/dist/ReactContexify.css"

import axios from "axios"
import Head from "next/head"

import FavoritesPlay from "../components/Favorites/Items/FavoritesPlay"
import TableHead from "../components/Favorites/TableHead"
import TrackArtists from "../components/Favorites/Items/TrackArtists"
import TrackDuration from "../components/Favorites/Items/TrackDuration"
import TrackLikedDate from "../components/Favorites/Items/TrackLikedDate"
import TrackName from "../components/Favorites/Items/TrackName"
import TrackOptions from "../components/Favorites/Items/TrackOptions"

function playlists({ playlists }) {
  const [session] = useSession()
  const { addToast } = useToasts()
  const Router = useRouter()

  return (
    <div className="flex w-full h-screen bg-backgroundBlue">
      <Head>
        <title>Favorites</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full mt-24 text-white">
        <div className="flex items-center xl:mt-6 xl:text-center">
          <h1 className="text-4xl font-bold ">Playlists</h1>
        </div>
        <div className="w-full h-screen mx-4">
          <div className="flex flex-col items-center justify-center w-full py-2">
            {playlists.items.map((playlist) => {
              return (
                <div
                  key={playlist.id}
                  className="flex justify-between w-11/12 p-3 my-2 rounded shadow bg-playlistContainer"
                >
                  <div className="flex">
                    <img
                      src={playlist.images[0].url}
                      alt="Playlist image"
                      width="75px"
                      height="75px"
                      className="rounded"
                    />
                    <div className="flex flex-col justify-center ml-5">
                      <h1 className="text-2xl font-bold">{playlist.name}</h1>
                      <h1 className="text-xl font-semibold">
                        Total Tracks: {playlist.tracks.total}
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-32">
                    dots
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, { Location: "/?error=Not+Logged+In" }).end()
  }

  const playlists = await axios
    .get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err.response.data)
    })

  return {
    props: { playlists },
  }
}

export default playlists
