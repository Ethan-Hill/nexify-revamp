import Head from "next/head";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen bg-backgroundBlue">
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex items-center justify-around flex-1 w-full text-white">
        <div className="flex flex-col">
          <h1 className="font-bold text-7xl">
            Welcome to <br />
            <span className="text-spotifyGreen">Nexify</span>
          </h1>
          <h2 className="mt-8 text-4xl font-semibold">Spotify All In One</h2>
        </div>

        <div className="p-4 bg-white">
          <img
            src="https://via.placeholder.com/700x400.png"
            alt="placeholder"
          />
        </div>
      </main>
    </div>
  );
}
