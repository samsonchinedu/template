import React from 'react'

const Title = ({text, top} : any) => {
  return (
    <div style={{marginTop: top}}>
        <h1>{text}</h1>
    </div>
  )
}

export default Title