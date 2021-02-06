import { useRouter } from "next/router"

export default function Home({ route }) {
  const Router = useRouter()

  if (route === "/") {
    return (
      <div
        className="flex items-center mb-12 justify-center w-16 h-16 transition ease-in-out transform rounded-lg cursor-pointer hover:shadow-md bg-white border dark:border-transparent dark:bg-buttonColor duration-250 hover:-translate-y-0.5 hover:scale-105"
        onClick={() => Router.push("/")}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 22H5C4.44772 22 4 21.5523 4 21V13H2L11.292 3.70698C11.4796 3.51921 11.7341 3.4137 11.9995 3.4137C12.2649 3.4137 12.5194 3.51921 12.707 3.70698L22 13H20V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82798L6 11.828V20H10V15Z"
            fill="#00D56E"
          ></path>
        </svg>
      </div>
    )
  }
  return (
    <div
      className="flex items-center mb-12 justify-center w-12 h-12 transition ease-in-out transform rounded-lg cursor-pointer hover:shadow-md bg-white border dark:border-transparent dark:bg-buttonColor duration-250 hover:-translate-y-0.5 hover:scale-105"
      onClick={() => Router.push("/")}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 22H5C4.44772 22 4 21.5523 4 21V13H2L11.292 3.70698C11.4796 3.51921 11.7341 3.4137 11.9995 3.4137C12.2649 3.4137 12.5194 3.51921 12.707 3.70698L22 13H20V21C20 21.5523 19.5523 22 19 22ZM10 15H14V20H18V11.828L12 5.82798L6 11.828V20H10V15Z"
          fill="#808080 "
        ></path>
      </svg>
    </div>
  )
}
