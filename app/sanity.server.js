import SanityClient from "picosanity"
import invariant from "tiny-invariant"

invariant(process.env.SANITY_PROJECT_ID, "SANITY_PROJECT_ID must be set")
invariant(process.env.SANITY_DATASET, "SANITY_DATASET must be set")
invariant(process.env.SANITY_TOKEN, "SANITY_TOKEN must be set")

export const client = new SanityClient({
  apiVersion: "2022-08-01",
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: true,
})
