import { useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { useToasts } from "react-toast-notifications"

import axios from "axios"
import Play from "./Options/Play"
import Delete from "./Options/Delete"
import AddToQueue from "./Options/AddToQueue"

export default function TrackOptions({ track }) {
  const [session] = useSession()
  const Router = useRouter()
  const { addToast } = useToasts()

  const play = (uri) => {
    axios
      .put(
        "https://api.spotify.com/v1/me/player/play",
        { uris: [uri] },
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        addToast("🎉 Playing the song!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(`❌ Error playing the song!, ${err}`, {
          appearance: "error",
          autoDismiss: true,
        })
        console.log(err)
      })
  }

  const addToQueue = (uri) => {
    axios
      .post(
        `https://api.spotify.com/v1/me/player/queue?uri=${uri}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        }
      )
      .then((res) => {
        addToast("🎉 Added the song to queue!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(`❌ Error adding the song to queue!, ${err}`, {
          appearance: "error",
          autoDismiss: true,
        })
        console.log(err)
      })
  }

  const deleteTrack = (ids) => {
    axios
      .delete(
        `https://api.spotify.com/v1/me/tracks?ids=${ids}`,

        {
          headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
          },
        },
        {}
      )
      .then((res) => {
        addToast("🎉 Deleted the track!", {
          appearance: "success",
          autoDismiss: true,
        })
        return res.data
      })
      .catch((err) => {
        addToast(`❌ Error deleting the track!, ${err}`, {
          appearance: "error",
          autoDismiss: true,
        })
        console.log(err)
      })
    Router.replace("/favorites")
  }

  return (
    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
      <sl-dropdown skidding="-140">
        <sl-button slot="trigger" caret></sl-button>
        <sl-menu>
          <Play handleClick={() => play(track.uri)} track={track} />
          <sl-menu-divider></sl-menu-divider>
          <AddToQueue handleClick={() => addToQueue(track.uri)} track={track} />
          <sl-menu-divider></sl-menu-divider>
          <Delete handleClick={() => deleteTrack(track.id)} track={track} />
        </sl-menu>
      </sl-dropdown>
    </td>
  )
}
