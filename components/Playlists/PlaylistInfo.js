import { useRouter } from "next/router"

export default function PlaylistInfo({ playlist }) {
  const Router = useRouter()

  return (
    <div
      className="flex w-full cursor-pointer"
      onClick={() => Router.push(`/playlists/${playlist.id}`)}
    >
      <img
        src={playlist.images[0].url}
        alt="Playlist image"
        width="75px"
        height="75px"
        className="rounded"
      />
      <div className="flex flex-col justify-center ml-5">
        <h1 className="text-2xl font-bold sm:text-lg">{playlist.name}</h1>
        <h1 className="text-xl font-semibold sm:text-base">
          Total Tracks: {playlist.tracks.total}
        </h1>
      </div>
    </div>
  )
}
