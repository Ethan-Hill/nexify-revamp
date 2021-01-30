import axios from "axios";
import dynamic from "next/dynamic";
import useSWR, { SWRConfig } from "swr";

import PlayerLayout from "../../components/Layouts/PlayerLayout";

const Switch = dynamic(() => import("../../components/Switch.js"));
const Loading = dynamic(() => import("../../components/Loading.js"));
const TrackInfo = dynamic(() =>
  import("../../components/Player/Dialog/TrackInfo")
);
const Protected = dynamic(() => import("../../components/Protected.js"));
const Error = dynamic(() => import("../../components/Error"));

const CurrentlyPlaying = dynamic(() =>
  import("../../components/Player/CurrentlyPlaying/CurrentlyPlaying")
);

const PlayerPanel = dynamic(() =>
  import("../../components/Player/PlayerPanel/PlayerPanel")
);

const Slider = dynamic(() => import("../../components/Player/Slider/Slider"));

import { useSession, getSession } from "next-auth/client";

function Player(props, { errorCode, errorMessage }) {
  const [session, loading] = useSession();

  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      })
      .then((res) => {
        return res.data;
      });

  const initialData = props.currentTrack;

  const initialData2 = props.topTracks;

  const { data: currentTrack, error } = useSWR(
    "https://api.spotify.com/v1/me/player",
    fetcher,
    {
      initialData,
      refreshInterval: 2500,
    }
  );

  const { data: topTracks } = useSWR(
    "https://api.spotify.com/v1/me/top/tracks?limit=5",
    fetcher,
    {
      initialData2,
    }
  );

  if (error) {
    return <Error statusCode="401" errorMessage="Not Authorized" />;
  }

  if (errorCode) {
    return <Error statusCode={errorCode} errorMessage={errorMessage} />;
  }

  if (loading) {
    return (
      <PlayerLayout>
        <main className="flex flex-col items-center justify-center flex-1 text-center">
          <Loading />
        </main>
      </PlayerLayout>
    );
  }
  if (session) {
    if (!currentTrack.item || !currentTrack.device) {
      return (
        <PlayerLayout>
          <main className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-3xl">Start playing something!</h1>
          </main>
        </PlayerLayout>
      );
    }
    return (
      <PlayerLayout>
        <main className="flex flex-wrap items-center justify-around flex-1 w-full">
          <TrackInfo track={currentTrack} />
          <CurrentlyPlaying track={currentTrack} />

          <Slider tracks={topTracks.items} />

          {session.user.profile.product === "premium" ? (
            <PlayerPanel track={currentTrack} device={currentTrack.device} />
          ) : null}
          <Switch />
        </main>
      </PlayerLayout>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return { props: { errorCode: 401, errorMessage: "Not Authorized" } };
  }

  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        return { props: { errorCode: 401, errorMessage: "Not Authorized" } };
      });

  const currentTrack = await fetcher("https://api.spotify.com/v1/me/player");

  const topTracks = await fetcher(
    "https://api.spotify.com/v1/me/top/tracks?limit=5"
  );

  return {
    props: { session, currentTrack, topTracks },
  };
}

export default Player;
