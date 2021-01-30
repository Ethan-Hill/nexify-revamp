import { useTheme } from "next-themes";
import InfoProperty from "./Items/InfoProperty";
import InfoButton from "./Items/InfoButton";

export default function TrackInfo({ track }) {
  const { theme } = useTheme();
  return (
    <sl-theme name={theme}>
      <sl-dialog label="Artist Infomation" class="dialog-overview">
        <sl-tab-group>
          {track.item.artists.map((artist) => (
            <sl-tab slot="nav" panel={artist.id} key={artist.id}>
              {artist.name}
            </sl-tab>
          ))}

          {track.item.artists.map((artist) => (
            <sl-tab-panel name={artist.id} key={artist.id}>
              <div className="flex flex-col items-center">
                <InfoProperty title="Artist" name={artist.name} />
                <InfoProperty title="ID" name={artist.id} />
                <InfoButton title="Link" link={artist.external_urls.spotify} />
              </div>
            </sl-tab-panel>
          ))}
        </sl-tab-group>
      </sl-dialog>
    </sl-theme>
  );
}
