/** @jsxImportSource @emotion/react */

import { json } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import { Global } from "@emotion/react"
import { getEnv } from "~/env.server"
import { getAnnouncement } from "~/models/announcement.server"
import AnnouncementBanner from "~/components/AnnouncementBanner"
import Header from "~/components/Header"
import theme, { globalStyles } from "~/styles/theme"

export const meta = () => ({
  charset: "utf-8",
  title: "Takeout Tracker",
  viewport: "width=device-width,initial-scale=1",
})

export const loader = async () => {
  const data = await getAnnouncement()

  return json({ announcement: data?.copy, ENV: getEnv() })
}

export default function App() {
  const { announcement, ENV } = useLoaderData()

  return (
    <html lang="en">
      <head>
        <Global styles={globalStyles} />

        <meta
          property="og:image"
          content="https://www.takeouttracker.com/opengraph-v3.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.takeouttracker.com/twitter-og-v1.jpg"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta
          property="twitter:image"
          content="https://www.takeouttracker.com/twitter-og-v1.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=2"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=2"
        />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg?v=2"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="apple-mobile-web-app-title" content="Takeout Tracker" />
        <meta name="application-name" content="Takeout Tracker" />
        <meta name="msapplication-TileColor" content="#182c44" />
        <meta name="theme-color" content="#182c44"></meta>

        <Meta />

        <Links />
      </head>

      <body>
        <div
          css={{
            "--pagePadding": "24px",
            [theme.mobile]: { "--pagePadding": "16px" },
          }}
        >
          {announcement && <AnnouncementBanner copy={announcement} />}

          <Header />
          <main>
            <Outlet />
          </main>
        </div>

        <ScrollRestoration />

        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />

        <LiveReload />
      </body>
    </html>
  )
}
