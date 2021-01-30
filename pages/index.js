import Head from "next/head"
import Login from "../components/Navigation/Items/TopBar/Items/Login"

import Favorites from "../components/Navigation/Items/Drawer/Items/Favorites"
import { useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { useToasts } from "react-toast-notifications"
import { useEffect } from "react"

export default function Home() {
  const Router = useRouter()
  const { addToast } = useToasts()
  const [session] = useSession()
  useEffect(() => {
    if (Router.query.error) {
      addToast(`❌ Error, Not logged In!`, {
        appearance: "error",
        autoDismiss: true,
      })
    }
  }, [])

  return (
    <div className="flex flex-col w-full h-screen bg-backgroundBlue">
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex flex-col items-center flex-1 w-full text-white justify-evenly">
        <section className="flex flex-wrap items-center w-full h-screen text-white justify-evenly">
          <div className="flex flex-col xl:mt-6 xl:text-center">
            <h1 className="font-bold text-7xl lg:text-5xl">
              Welcome to <br />
              <span className="text-spotifyGreen">Nexify</span>
            </h1>
            <h2 className="mt-8 mb-12 text-4xl font-semibold">
              Spotify All In One
            </h2>
            {!session ? (
              <div>
                <h2 className="mb-5 text-2xl">Start by signing in</h2>
                <div className="flex items-center justify-center">
                  <Login />
                </div>
              </div>
            ) : null}
          </div>
          <div className="p-4 m-4 xl:hidden">
            <img src="/logo.png" alt="logo" />
          </div>
        </section>
      </main>
    </div>
  )
}
