import { getSession, useSession } from "next-auth/client"
import { useToasts } from "react-toast-notifications"
import { useRouter } from "next/router"
import { useContextMenu } from "react-contexify"
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
import Menu from "../components/Favorites/Menu/Menu"

function Favorites({ favoriteTracks, playlists }) {
  const [session] = useSession()
  const { addToast } = useToasts()
  const Router = useRouter()

  const tracks = favoriteTracks.items.map((track) => track.track.uri)

  const MENU_ID = "initalID"

  const { show } = useContextMenu({
    id: MENU_ID,
  })

  function displayMenu(e) {
    try {
      show(e, {
        props: {
          id: e.target.parentElement.id,
          uri: e.target.parentElement.attributes["uri"].nodeValue,
        },
      })
    } catch {
      return null
    }
  }

  function handleItemClick({ event, props }) {
    switch (event.currentTarget.id) {
      case "play":
        play(props.uri)
        break
      case "atq":
        addToQueue(props.uri)
        break
      case "atp":
        console.log(event.currentTarget.attributes["pid"].nodeValue)
        addToPlaylist(
          event.currentTarget.attributes["pid"].nodeValue,
          props.uri
        )
        break
      case "delete":
        deleteTrack(props.id)
        break
    }
  }

  const play = (uri) => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/play",
        { uris: [uri] },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        addToast("🎉 Playing the song!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(
          `❌ Error playing the song!, ${err}. Please check you have a active spotify device`,
          {
            appearance: "error",
            autoDismiss: true,
          }
        )
        console.log(err)
      })
  }

  const addToQueue = (uri) => {
    axios
      .post(
        `https://api.spotify.com/v1/me/player/queue?uri=${uri}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        addToast("🎉 Added the song to queue!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(
          `❌ Error adding the song to queue!, ${err}. Please check you have a active spotify device`,
          {
            appearance: "error",
            autoDismiss: true,
          }
        )
        console.log(err)
      })
  }

  const addToPlaylist = (id, uri) => {
    axios
      .post(
        `https://api.spotify.com/v1/playlists/${id}/tracks`,
        { uris: [uri] },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        addToast("🎉 Added the song to playlist!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(`❌ Error adding the song to playlist!, ${err}`, {
          appearance: "error",
          autoDismiss: true,
        })
        console.log(err)
      })
  }

  const deleteTrack = (ids) => {
    axios
      .delete(
        `https://api.spotify.com/v1/me/tracks?ids=${ids}`,

        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        },
        {}
      )
      .then((res) => {
        addToast("🎉 Deleted the track!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(`❌ Error deleting the track!, ${err}`, {
          appearance: "error",
          autoDismiss: true,
        })
        console.log(err)
      })
    Router.replace("/favorites")
  }

  const playAll = () => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/play",
        { uris: tracks },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        addToast("🎉 Playing your favorite tracks!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(`❌ Error playing your favorite tracks!, ${err}`, {
          appearance: "error",
          autoDismiss: true,
        })
        console.log(err)
      })
  }

  return (
    <div className="flex w-full h-screen bg-backgroundBlue">
      <Head>
        <title>Favorites</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full mt-24 text-white">
        <div className="flex items-center xl:mt-6 xl:text-center">
          <h1 className="text-4xl font-bold ">Liked songs</h1>

          <FavoritesPlay handleClick={playAll} />

          <Menu
            handleItemClick={handleItemClick}
            playlists={playlists}
            MENU_ID={MENU_ID}
          />
        </div>
        <div className="w-full h-screen mx-4 overflow-y-scroll">
          <div className="w-full py-2">
            <div className="inline-block w-full pt-3 overflow-hidden align-middle shadow shadow-dashboard">
              <table className="w-full">
                <thead>
                  <TableHead />
                </thead>
                <tbody>
                  {favoriteTracks.items.map((track) => {
                    return (
                      <tr
                        onContextMenu={displayMenu}
                        key={track.track.id}
                        id={track.track.id}
                        uri={track.track.uri}
                        className="text-white hover:bg-gray-900"
                      >
                        <TrackName id={track.track.id} track={track.track} />
                        <TrackArtists
                          id={track.track.id}
                          uri={track.track.uri}
                          artists={track.track.artists}
                        />
                        <TrackDuration
                          id={track.track.id}
                          uri={track.track.uri}
                          duration={track.track.duration_ms}
                        />
                        <TrackLikedDate
                          id={track.track.id}
                          uri={track.track.uri}
                          date={track.added_at}
                        />
                        <TrackOptions id={track.track.id} track={track.track} />
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
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
    return { props: {} }
  }

  const favoriteTracks = await axios
    .get("https://api.spotify.com/v1/me/tracks", {
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
    props: { favoriteTracks, playlists },
  }
}

export default Favorites
