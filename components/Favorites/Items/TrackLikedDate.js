export default function TrackLikedDate({ date }) {
  const d = new Date(date)
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d)
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d)
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d)
  const newDate = `${da} ${mo} ${ye}`
  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 lg:hidden">
      {newDate}
    </td>
  )
}
