import React from 'react'
import Image from 'mui-image'
import HElogo from "../assets/he-logo.png";

const Register2 = () => {
  return (
    <div className='parentContainer'>
        <div className='contentContainer'>
            <Image src={HElogo} width="50px" fit="cover" overflow="hidden"/>
            <div className='leftSide'>
                left side
            </div>
            <div className='rightSide' background={HElogo}>
                right side
            </div>

        </div>
    </div>
  )
}

export default Register2