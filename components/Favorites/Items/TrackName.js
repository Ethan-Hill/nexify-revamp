export default function TrackName({ track }) {
  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <h1>{track.name}</h1>
    </td>
  )
}
