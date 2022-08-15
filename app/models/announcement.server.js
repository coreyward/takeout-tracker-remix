import { client } from "~/sanity.server"
import { getCached } from "~/cache.server"

export const getAnnouncement = () =>
  getCached(["announcement"], () =>
    client.fetch(`//groq
      *[
        _type == "announcement"
        && !(_id in path("drafts.**"))
        && active == true
      ] | order(publishedAt desc)[0] { copy }
    `)
  )
