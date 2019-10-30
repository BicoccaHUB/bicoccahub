import React from "react"
import Logo from "../logo.svg"

function CompactHeader({ props }) {
  return (
    <header>
      <div className="text-center my-5">
        <a href="/">
          <Logo />
        </a>
      </div>
    </header>
  )
}

export default CompactHeader
