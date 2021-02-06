export default function TrackDuration({ duration }) {
  function millisToMinutesAndSeconds(duration) {
    var minutes = Math.floor(duration / 60000)
    var seconds = ((duration % 60000) / 1000).toFixed(0)
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  }
  return (
    <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-500 dark:text-white">
      {millisToMinutesAndSeconds(duration)}
    </td>
  )
}
