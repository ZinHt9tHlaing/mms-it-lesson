import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' max-w-[1000px] mx-auto px-5 lg:px-0'>{children}</div>
  )
}

export default Container