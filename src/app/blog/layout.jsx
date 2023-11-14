import React from 'react'

const BlogLayout = ({children}) =>  {
  return (
    <div>
      {/**No actual need to put the h1 tag here cause there BlogLayout is already rendering its children  */}
        {/* <h1>Blog Layout</h1> */}
        {children}
    </div>
  )
}

export default BlogLayout