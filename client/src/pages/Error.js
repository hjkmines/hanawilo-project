import React from 'react'
import dumpster from "../assets/dumpster-fire.gif"; 
import Image from "mui-image";
import { Link } from "react-router-dom";

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

        <p color="white">Go back to the <Link to="/" color="white" > Homepage</Link> </p> 
    </div>
  )
}

export default Error