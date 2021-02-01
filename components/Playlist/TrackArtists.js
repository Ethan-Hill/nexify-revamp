export default function TrackArtists({ artists }) {
  const artist_names = artists.map((artist) => artist.name).join(", ")
  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      {artist_names}
    </td>
  )
}
