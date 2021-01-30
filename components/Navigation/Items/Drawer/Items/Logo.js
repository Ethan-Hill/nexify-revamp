import { useRouter } from "next/router"

export default function Logo() {
  const Router = useRouter()

  return (
    <div
      className="flex items-center justify-center mt-12 cursor-pointer"
      onClick={() => Router.push("/")}
    >
      <div className="flex h-12">
        <img src="/logo.png" height="48px" width="30px" alt="Logo" height="" />
      </div>
    </div>
  )
}
