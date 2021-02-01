import { getSession, useSession } from "next-auth/client"
import { useToasts } from "react-toast-notifications"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useContextMenu } from "react-contexify"
import "react-contexify/dist/ReactContexify.css"

import InfoDialog from "../components/Playlists/PlaylistDialog/InfoDialog"
import EditDialog from "../components/Playlists/PlaylistDialog/EditDialog"
import PlaylistInfo from "../components/Playlists/PlaylistInfo"
import Menu from "../components/Playlists/Menu/Menu"
import Dots from "../components/Playlists/Dots"

import axios from "axios"
import Head from "next/head"

function playlists({ playlists }) {
  const [session] = useSession()
  const { addToast } = useToasts()
  const Router = useRouter()

  const MENU_ID = "initalID"

  const { show } = useContextMenu({
    id: MENU_ID,
  })

  function displayMenu(e) {
    try {
      show(e, {
        props: {
          id: e.target.id,
        },
      })
    } catch (err) {
      console.log(err)
      addToast(
        `❌ Error opening menu, Please check you have a active spotify device and try to avoid right clicking content.`,
        {
          appearance: "error",
          autoDismiss: true,
        }
      )
    }
  }

  const playAll = async (id) => {
    const playlistTracks = await axios
      .get(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      })
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err.response.data)
      })

    const playlistUris = playlistTracks.items.map((track) => track.track.uri)

    await axios
      .put(
        "https://api.spotify.com/v1/me/player/play",
        { uris: playlistUris },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        addToast("🎉 Playing your playlist!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(`❌ Error playing your favorite tracks!, ${err}`, {
          appearance: "error",
          autoDismiss: true,
        })
        console.log(err)
      })
  }

  useEffect(() => {
    const form = document.querySelector(".form-overview")
    const dialog = document.querySelector(".dialog-overview")

    form.addEventListener("sl-submit", (event) => {
      const formData = event.detail.formData

      var object = {}
      formData.forEach((value, key) => (object[key] = value))
      const data = JSON.stringify(object)
      const id = event.target.parentElement.previousElementSibling.id

      dialog.hide()

      editPlaylist(data, id)
    })
  }, [])

  const editPlaylist = (data, id) => {
    const { name, description } = JSON.parse(data)

    if (name != "" && description != "") {
      axios
        .put(
          `https://api.spotify.com/v1/playlists/${id}`,
          { name, description },
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }
        )
        .then((res) => {
          addToast("🎉 Edited the playlist!", {
            appearance: "success",
            autoDismiss: true,
          })
          return res.data
        })
        .catch((err) => {
          addToast(`❌ Error editing the playlist!, ${err}.`, {
            appearance: "error",
            autoDismiss: true,
          })
          console.log(err)
        })
    } else if (name === "" && description != "") {
      axios
        .put(
          `https://api.spotify.com/v1/playlists/${id}`,
          { description },
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }
        )
        .then((res) => {
          addToast("🎉 Edited the playlist!", {
            appearance: "success",
            autoDismiss: true,
          })
          return res.data
        })
        .catch((err) => {
          addToast(`❌ Error editing the playlist!, ${err}.`, {
            appearance: "error",
            autoDismiss: true,
          })
          console.log(err)
        })
    } else if (name != "" && description === "") {
      axios
        .put(
          `https://api.spotify.com/v1/playlists/${id}`,
          { name },
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          }
        )
        .then((res) => {
          addToast("🎉 Edited the playlist!", {
            appearance: "success",
            autoDismiss: true,
          })
          return res.data
        })
        .catch((err) => {
          addToast(`❌ Error editing the playlist!, ${err}.`, {
            appearance: "error",
            autoDismiss: true,
          })
          console.log(err)
        })
    }

    Router.replace("/playlists")
  }

  const openEdit = () => {
    const dialog = document.querySelector(".dialog-overview")
    dialog.show()
  }

  const openPlaylist = () => {
    const dialog = document.querySelector(".dialog-playlist")
    dialog.show()
  }

  async function handleItemClick({ event, props }) {
    switch (event.currentTarget.id) {
      case "play":
        playAll(props.id)
        break
      case "edit":
        const playlist = await axios
          .get(`https://api.spotify.com/v1/playlists/${props.id}`, {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          })
          .then((res) => {
            return res.data
          })
          .catch((err) => {
            console.log(err)
          })

        const { name, description } = playlist

        const formName = document.querySelector(".name")
        const formDescription = document.querySelector(".description")

        formName.value = name
        formDescription.value = description

        openEdit(props.id)
        break
      case "view":
        openPlaylist(props.id)
        break
      case "delete":
        deleteTrack(props.id)
        break
    }
  }

  return (
    <div className="flex w-full h-screen bg-backgroundBlue">
      <Head>
        <title>Favorites</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 w-full mt-24 text-white">
        <div className="flex items-center xl:mt-6 xl:text-center">
          <h1 className="text-4xl font-bold ">Playlists</h1>
        </div>
        <div className="w-full h-screen mx-4">
          <div className="flex flex-col items-center justify-center w-full py-2">
            {playlists.items.map((playlist) => {
              return (
                <div
                  key={playlist.id}
                  className="flex justify-between w-11/12 p-3 my-2 rounded shadow bg-playlistContainer"
                >
                  <PlaylistInfo playlist={playlist} />
                  <div className="flex items-center justify-center w-32 md:hidden">
                    <Dots playlist={playlist} displayMenu={displayMenu} />
                    <Menu
                      handleItemClick={handleItemClick}
                      playlists={playlists}
                      MENU_ID={MENU_ID}
                    />
                    <EditDialog />
                    <InfoDialog playlists={playlists} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, { Location: "/?error=Not+Logged+In" }).end()
    return { props: {} }
  }

  const playlists = await axios
    .get("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err.response.data)
    })

  return {
    props: { playlists },
  }
}

export default playlists
