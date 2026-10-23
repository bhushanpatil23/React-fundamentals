import React from 'react'

const YellowBorder = ({children}) => {

    const style = {
        border: "2px solid yellow",
        borderRadius : "12px",
        padding: " 8px 16px"
    }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default YellowBorder