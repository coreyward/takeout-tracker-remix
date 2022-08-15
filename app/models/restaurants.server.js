import { client } from "~/sanity.server"
import { getCached } from "~/cache.server"

export const getLocations = () =>
  getCached(["restaurants/all"], async () => {
    const restaurants = await client.fetch(`//groq
      *[
        _type == "restaurant"
        && !(_id in path("drafts.**"))
        && count(locations[geoLocation.lat > -180 && geoLocation.lat < 180]) > 0
      ] | order(featured desc) {
        _id,
        alsoOffering,
        confirmedAt,
        instagramHandle,
        menuUrl,
        "name": title,
        orderingNotes,
        orderUrl,
        policyNotes,
        sourceNotes,
        sourceUrls,
        tags,
        takeoutOptions,
        unverified,
        website,
        locations[geoLocation.lat > -180 && geoLocation.lat < 180] {
          _key,
          address,
          hours,
          openForBusiness,
          "orderPhone": phoneNumber,
          geoLocation {
            lat,
            lng,
          },
        },
      }
    `)

    return restaurants.flatMap(({ locations, ...base }) =>
      locations.map((loc) => ({
        ...base,
        ...loc,
      }))
    )
  })
