import invariant from "tiny-invariant"

export const getEnv = () => {
  invariant(process.env.SANITY_DATASET, "SANITY_DATASET is required")
  invariant(process.env.SANITY_PROJECT_ID, "SANITY_PROJECT_ID is required")

  return {
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  }
}
