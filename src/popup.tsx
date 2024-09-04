import { useState } from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import { Scraper } from "./components/home/Scraper"

const Popup = () => {
  const [url, setUrl] = useState<string>("")

  useIsomorphicLayoutEffect(() => {
    chrome.tabs
      .query({
        active: true,
        currentWindow: true
      })
      .then((tabs) => {
        if (tabs[0]?.url) {
          setUrl(tabs[0].url)
        }
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <Scraper initialUrl={url} />
    </div>
  )
}

export default Popup
