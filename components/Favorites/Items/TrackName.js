export default function TrackName({ track }) {
  return (
    <td className="flex items-center px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <img
        src={track.album.images[0].url}
        alt="Track image"
        width="42px"
        height="42"
        style={{ marginRight: "50px" }}
      />
      <h1>{track.name}</h1>
    </td>
  )
}
