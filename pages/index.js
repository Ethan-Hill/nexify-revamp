import Head from "next/head"
import { useRouter } from "next/router"
import { useToasts } from "react-toast-notifications"
import { useEffect } from "react"

export default function Home() {
  const Router = useRouter()
  const { addToast } = useToasts()
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
            <h1 className="font-bold text-7xl ">
              Welcome to <br />
              <span className="text-spotifyGreen">Nexify</span>
            </h1>
            <h2 className="mt-8 text-4xl font-semibold">Spotify All In One</h2>
          </div>
          <div className="p-4 m-4">
            <img src="/logo.png" alt="logo" />
          </div>
        </section>
      </main>
    </div>
  )
}
