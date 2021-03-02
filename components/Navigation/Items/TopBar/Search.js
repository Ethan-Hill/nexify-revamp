import { useSession } from "next-auth/client"

export default function Search({ handleSearch, handleClear }) {
  const [session] = useSession()

  const handlePress = (e) => {
    console.log(e.key === "Enter")
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }
  const clear = () => {
    const input = document.querySelector(".input")
    input.value = ""
  }
  if (session) {
    return (
      <div className="flex flex-col items-center justify-center flex-auto sm:justify-center dark:text-white">
        <div className="flex flex-col">
          <sl-input
            placeholder="Search"
            size="large"
            onKeyPress={handlePress}
            tabIndex="0"
            class="input"
          >
            <sl-icon name="search" slot="prefix"></sl-icon>
            <sl-icon
              name="x"
              slot="suffix"
              style={{ cursor: "pointer" }}
              onClick={() => {
                handleClear()
                clear()
              }}
            ></sl-icon>
          </sl-input>
        </div>
      </div>
    )
  } else {
    return null
  }
}
