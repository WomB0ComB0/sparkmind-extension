import { Link } from "@nextui-org/link"
import { useEffect, useState } from "react"

import { Button } from "~components/ui/button"

import "~styles/style.css"

function IndexPopup() {
  const [url, setUrl] = useState<string>("")
  useEffect(() => {
    chrome.tabs
      .query({
        active: true,
        currentWindow: true
      })
      .then((url) => {
        console.log(url)
        console.log(url[0].url)
        setUrl(url[0].url)
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div
      style={{
        padding: 16
      }}>
      <h2 className="text-2xl font-bold text-red-500">
        Welcome to your{" "}
        <Link href="https://www.plasmo.com" target="_blank" rel="noreferrer">
          Plasmo
        </Link>{" "}
        Extension!
      </h2>
      <Link
        href="https://docs.plasmo.com"
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md">
        View Docs
      </Link>
      <p>{url}</p>
      <Button>Click me</Button>
    </div>
  )
}

export default IndexPopup
