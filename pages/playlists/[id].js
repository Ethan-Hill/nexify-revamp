import { getSession, useSession } from "next-auth/client"
import { useToasts } from "react-toast-notifications"
import { useRouter } from "next/router"
import "react-contexify/dist/ReactContexify.css"

import TrackName from "../../components/Playlist/TrackName"
import TrackArtists from "../../components/Playlist/TrackArtists"
import TrackDuration from "../../components/Playlist/TrackDuration"
import TableHead from "../../components/Playlist/TableHead"

import axios from "axios"
import Head from "next/head"

function playlists({ playlist }) {
  const [session] = useSession()
  const { addToast } = useToasts()
  const Router = useRouter()

  return (
    <div className="flex w-full h-screen bg-white dark:bg-backgroundBlue">
      <Head>
        <title>{playlist.name}</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full mt-24 sark:text-white">
        <div className="flex items-center xl:mt-6 xl:text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            {playlist.name}
          </h1>
        </div>
        <div className="w-full h-screen mx-4 overflow-y-scroll">
          <div className="w-full py-2">
            <div className="inline-block w-full pt-3 overflow-hidden align-middle shadow shadow-dashboard">
              <table className="w-full">
                <thead>
                  <TableHead />
                </thead>
                <tbody>
                  {playlist.tracks.items.map((track) => {
                    return (
                      <tr
                        key={track.track.id}
                        id={track.track.id}
                        uri={track.track.uri}
                        className="text-white darl:text-white hover:bg-gray-100 dark:hover:bg-gray-900 h-28"
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

  const id = context.params.id

  const playlist = await axios
    .get(`https://api.spotify.com/v1/playlists/${id}`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })

  return {
    props: { playlist },
  }
}

export default playlists
