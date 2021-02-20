import { useRouter } from "next/router"

export default function ({ searchedTracks }) {
  const Router = useRouter()

  if (searchedTracks[0]) {
    return (
      <div className="fixed mt-3 overflow-y-scroll bg-gray-800 rounded h-144 top-16">
        {searchedTracks.map((track) => {
          return (
            <div
              id={track.id}
              className="flex m-2 my-8 cursor-pointer w-96 hover:bg-gray-500 dark:text-white"
              onClick={() => Router.push(`/tracks/${track.id}`)}
            >
              <div className="flex items-center justify-start w-full p-2">
                <img
                  src={track.album.images[0].url}
                  width="75px"
                  height="75px"
                  className="mr-12"
                  alt=""
                />
                <h1 className="text-xl truncate bold">{track.name}</h1>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="fixed mt-3 bg-gray-800 rounded h-144 top-24">
        {searchedTracks.map((track) => {
          return (
            <div className="flex mx-16 my-8 w-52 hover:bg-gray-500 dark:text-white">
              <div className="flex items-center w-full p-2 justify-evenly">
                <img
                  src={track.album.images[0].url}
                  width="50px"
                  height="50px"
                  alt=""
                />
                <h1 className="text-lg bold">{track.name}</h1>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
