export default function TrackName({ track }) {
  return (
    <td className="flex flex-col px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <img
        src={track.album.images[0].url}
        alt="Track image"
        width="42px"
        height="42px"
      />
      <h1 style={{ width: "max-content" }}>{track.name}</h1>
    </td>
  )
}
