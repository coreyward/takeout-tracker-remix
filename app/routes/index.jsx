/** @jsxImportSource @emotion/react */

import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import RestaurantsViewer from "~/components/RestaurantsViewer"
import { getLocations } from "../models/restaurants.server"

export const loader = async () => {
  const locations = await getLocations()

  return json({ locations })
}

export default function Index() {
  const { locations } = useLoaderData()

  return (
    <RestaurantsViewer
      // TODO: Set these based on Sanity values
      title="Restaurants"
      // defaultSearchQuery={context.searchQuery || defaultSearchQuery}
      restaurants={locations}
      defaultViewMode="map"
      showingAll
    />
  )
}

export function meta() {
  return {
    title: "Takeout Tracker",
    "og:title": "Takeout Tracker",
    description:
      "All of the best locally run restaurants in Austin, TX, now in this quasi-post-covid world.",
    "og:description":
      "All of the best locally run restaurants in Austin, TX, now in this quasi-post-covid world.",
  }
}
