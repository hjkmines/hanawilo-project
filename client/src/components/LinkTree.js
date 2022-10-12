import React from 'react'
import { Link } from 'react-router-dom';

const LinkTree = () => {
  return (
    <div>
        <h3>Link tree</h3>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/directory">directory</Link>
        <br/>
        <Link to="/messages">messages</Link>
        <br/>
                    {/* <Box>Link tree </Box>
                        <Box>
                            <Link href='/' color='inherit'>
                                Home
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/directory' color='inherit'>
                               Directory
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/messages' color='inherit'>
                                Messages
                            </Link>
                        </Box>
                        <Box>
                            <Link href='/about' color='inherit'>
                               About Us 
                            </Link>
                    </Box> */}
    </div>
  )
}

export default LinkTree