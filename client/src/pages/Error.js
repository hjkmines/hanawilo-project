import React from 'react'
import dumpster from "../assets/dumpster-fire.gif"; 
import Image from "mui-image";

const Error = () => {
  return (
    <div>
        <h2>Page Not Found!</h2>
        <p> Lorem ipsum: Page not found </p>
        <Image 
          src={dumpster}
          height="40vh"
          fit = "contain"
        />
    </div>
  )
}

export default Error