import { PassThrough } from "stream"
import { Response } from "@remix-run/node"
import { RemixServer } from "@remix-run/react"
import { renderToPipeableStream } from "react-dom/server"
import { getEnv } from "~/env.server"
import TTLCache from "@isaacs/ttlcache"

const ABORT_DELAY = 5000

global.ENV = getEnv()

if (!global.cache) {
  console.log("initializing cache")
  global.cache = new TTLCache({ max: 100, ttl: 1000 * 60 * 1 })
}

export default function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  return new Promise((resolve, reject) => {
    let didError = false

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onShellReady: () => {
          const body = new PassThrough()

          responseHeaders.set("Content-Type", "text/html")

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          )

          pipe(body)
        },
        onShellError: (err) => {
          reject(err)
        },
        onError: (error) => {
          didError = true

          console.error(error)
        },
      }
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
