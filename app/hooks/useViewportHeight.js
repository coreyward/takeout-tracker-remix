import { useEffect, useState } from "react"
import debounce from "lodash.debounce"

export default (initialState = "100%", { ttl = 100 } = {}) => {
  const [height, setHeight] = useState(initialState)

  useEffect(() => {
    const calculateHeight = debounce(() => {
      setHeight(window.innerHeight)
    }, ttl)

    calculateHeight()
    window.addEventListener("resize", calculateHeight)

    return () => {
      window.removeEventListener("resize", calculateHeight)
    }
  }, [ttl])

  return height
}
