export default function TrackName({ track }) {
  return (
    <td className="flex flex-col w-full pr-6 whitespace-no-wrap border-b border-gray-500">
      <div
        className="flex items-center justify-start pl-3 w-96 h-44 playlistImages"
        style={{
          background: `linear-gradient(to left, rgba(29, 24, 55, 1) 0%, rgba(29, 24, 55, 0) 49%, rgba(29, 24, 55, 1) 100%),url(${track.album.images[1].url})`,
          backgroundPosition: `center`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 style={{ width: "max-content", fontWeight: "bold" }}>
          {track.name}
        </h1>
      </div>
    </td>
  )
}
