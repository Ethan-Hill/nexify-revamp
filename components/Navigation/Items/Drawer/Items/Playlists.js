import { useRouter } from "next/router"

export default function Playlists({ route }) {
  const Router = useRouter()

  if (route === "/playlists") {
    return (
      <div
        className="flex items-center mb-12 justify-center w-16 h-16 transition ease-in-out transform rounded-lg cursor-pointer hover:shadow-md bg-white border dark:border-transparent dark:bg-buttonColor duration-250 hover:-translate-y-0.5 hover:scale-105"
        onClick={() => Router.push("/playlists")}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18H3V16H15V18ZM21 13H3V11H21V13ZM15 8H3V6H15V8Z"
            fill="#00D56E"
          ></path>
        </svg>
      </div>
    )
  }

  return (
    <div
      className="flex items-center mb-12 justify-center w-12 h-12 transition ease-in-out transform rounded-lg cursor-pointer hover:shadow-md bg-white border dark:border-transparent dark:bg-buttonColor duration-250 hover:-translate-y-0.5 hover:scale-105"
      onClick={() => Router.push("/playlists")}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18H3V16H15V18ZM21 13H3V11H21V13ZM15 8H3V6H15V8Z"
          fill="#808080 "
        ></path>
      </svg>
    </div>
  )
}
