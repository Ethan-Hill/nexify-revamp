import { getSession, useSession } from "next-auth/client"
import { useRouter } from "next/router"
import axios from "axios"
import Head from "next/head"

import TrackArtists from "../components/Favorites/Items/TrackArtists"
import TrackDuration from "../components/Favorites/Items/TrackDuration"
import TrackLikedDate from "../components/Favorites/Items/TrackLikedDate"
import TrackName from "../components/Favorites/Items/TrackName"
import TrackOptions from "../components/Favorites/Items/TrackOptions"

function Favorites({ favoriteTracks }) {
  const Router = useRouter()
  const [session, loading] = useSession()
  return (
    <div className="flex w-full h-screen bg-backgroundBlue">
      <Head>
        <title>Favorites</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full mt-24 text-white">
        <div className="flex xl:mt-6 xl:text-center">
          <h1 className="text-4xl font-bold ">Liked songs</h1>
        </div>

        <div className="w-full h-screen mx-4 overflow-y-scroll scrollbar scrollbar-thumb-spotifyGreen scrollbar-track-transparent">
          <div className="w-full py-2">
            <div className="inline-block w-full pt-3 overflow-hidden align-middle shadow shadow-dashboard">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">
                      Track Name
                    </th>
                    <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">
                      Artists
                    </th>
                    <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">
                      Liked
                    </th>
                    <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {favoriteTracks.items.map((track) => {
                    return (
                      <tr
                        key={track.id}
                        className="text-white hover:bg-gray-900"
                      >
                        <TrackName key={track.id} track={track.track} />
                        <TrackArtists
                          key={track.id}
                          artists={track.track.artists}
                        />
                        <TrackDuration
                          key={track.id}
                          duration={track.track.duration_ms}
                        />
                        <TrackLikedDate key={track.id} date={track.added_at} />
                        <TrackOptions track={track.track} />
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

  return {
    props: { favoriteTracks },
  }
}

export default Favorites
