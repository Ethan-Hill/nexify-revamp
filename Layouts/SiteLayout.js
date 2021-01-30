import Head from "next/head";
import TopBar from "../components/Navigation/TopBar";
import Drawer from "../components/Navigation/Drawer";

export default function SiteLayout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#151c3c" />
        <meta name="description" content="Spotify All In One." />
        <link rel="icon" href="/logo.ico" />
        <meta name="twitter:card" content="Spotify All In One" />
        <meta name="twitter:url" content="https://nexify.vercel.app" />
        <meta name="twitter:title" content="Nexify" />
        <meta name="twitter:description" content="Spotify All In One" />
        <meta name="twitter:creator" content="@Hilly_Jay" />
        <meta property="og:type" content="https://nexify.vercel.app" />
        <meta property="og:title" content="Nexify" />
        <meta property="og:description" content="Spotify All In One" />
        <meta property="og:site_name" content="Nexify" />
        <meta property="og:url" content="https://nexify.vercel.app" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=5 initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <TopBar />
      <div className="flex">
        <Drawer />
        {children}
      </div>
    </div>
  );
}
