import React from 'react'
import Icon from '../Icon/page'

const Navbar = ({icon} : any) => {
  return (
    <div>
        <div>
            <Icon icon={icon}  />
        </div>
        <div></div>
    </div>
  )
}

export default Navbar