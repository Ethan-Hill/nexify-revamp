export default function TableHead() {
  return (
    <tr>
      <th className="px-6 py-3 text-lg leading-4 tracking-wider text-left text-black border-b-2 border-gray-300 dark:text-white">
        Track Name
      </th>
      <th className="px-6 py-3 text-lg leading-4 tracking-wider text-left text-black border-b-2 border-gray-300 dark:text-white">
        Artists
      </th>
      <th className="px-6 py-3 text-lg leading-4 tracking-wider text-left text-black border-b-2 border-gray-300 dark:text-white lg:hidden">
        Duration
      </th>
      <th className="px-6 py-3 text-lg leading-4 tracking-wider text-left text-black border-b-2 border-gray-300 dark:text-white lg:hidden">
        Liked
      </th>
      <th className="px-6 py-3 text-lg leading-4 tracking-wider text-left text-black border-b-2 border-gray-300 dark:text-white">
        Options
      </th>
    </tr>
  )
}
