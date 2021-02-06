import InfoButton from "../InfoButton"
import InfoProperty from "../InfoProperty"
import InfoTrack from "../InfoTrackList"

export default function PlaylistDialog({ playlists }) {
  return (
    <sl-dialog label="Playlist Infomation" class="dialog-playlist">
      <sl-tab-group>
        {playlists.items.map((playlist) => (
          <sl-tab slot="nav" panel={playlist.id} key={playlist.id}>
            {playlist.name}
          </sl-tab>
        ))}

        {playlists.items.map((playlist) => (
          <sl-tab-panel name={playlist.id} key={playlist.id}>
            <div className="flex flex-col items-center">
              <InfoProperty title="ID" name={playlist.id} />
              <InfoTrack playlist={playlist} />
              <InfoButton title="Link" link={playlist.external_urls.spotify} />
            </div>
          </sl-tab-panel>
        ))}
      </sl-tab-group>
    </sl-dialog>
  )
}
