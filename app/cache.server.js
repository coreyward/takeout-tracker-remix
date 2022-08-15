export const getCached = async (keyParts, fetchFn) => {
  const key = keyParts.join("/")

  const cachedValue = global.cache.get(key)
  if (cachedValue) {
    console.info("[cache hit]", key)
    return cachedValue
  }

  const value = await Promise.resolve(fetchFn())
  global.cache.set(key, value)

  return value
}
