import { ToastProvider } from "react-toast-notifications"
import { useTheme } from "next-themes"
import Head from "next/head"

import Drawer from "../components/Navigation/Drawer"
import TopBar from "../components/Navigation/TopBar"
import Switch from "../components/Switch"

export default function SiteLayout({ children }) {
  const { theme, setTheme } = useTheme()
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
        <link rel="apple-touch-icon" href="/logo.png"></link>
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.26/dist/shoelace/shoelace.css"
        />
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.26/dist/shoelace/shoelace.esm.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.26/themes/dark.css"
        ></link>
      </Head>

      <div className="flex">
        <Drawer />
        <TopBar />
        <ToastProvider
          autoDismiss
          autoDismissTimeout={6000}
          placement="top-right"
        >
          <sl-theme name={theme}>{children}</sl-theme>
          <Switch />
        </ToastProvider>
      </div>
    </div>
  )
}
