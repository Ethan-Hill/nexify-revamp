import "tailwindcss/tailwind.css"
import "nprogress/nprogress.css"
import "../nprogress.css"

import NProgress from "nprogress"
import SiteLayout from "../Layouts/SiteLayout"
import Router from "next/router"
import { ThemeProvider } from "next-themes"
import { setOptions, getSession, Provider } from "next-auth/client"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

setOptions({ site: "http://localhost:3000" })

function App({ Component, pageProps, session }) {
  return (
    <Provider session={session} options={{ clientMaxAge: 60 * 30 }}>
      <ThemeProvider attribute="class">
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </ThemeProvider>
    </Provider>
  )
}

App.getInitialProps = async (context) => {
  const session = await getSession(context)

  return {
    session,
  }
}

export default App
