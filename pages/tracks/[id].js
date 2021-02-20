import { getSession, useSession } from "next-auth/client"
import { useToasts } from "react-toast-notifications"
import { useRouter } from "next/router"

import axios from "axios"
import Head from "next/head"

function Track({ track }) {
  const [session] = useSession()
  const { addToast } = useToasts()
  const Router = useRouter()

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
    <div className="flex w-full h-screen bg-white dark:bg-backgroundBlue">
      <Head>
        <title>{track.name}</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full mt-24 sark:text-white">
        <div className="flex items-center xl:mt-6 xl:text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white">
            {track.name}
          </h1>
        </div>
        <div className="w-full h-screen mx-4">
          <div className="w-full py-2"></div>
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

  const track = await axios
    .get(`https://api.spotify.com/v1/tracks/${id}`, {
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
    props: { track },
  }
}

export default Track
