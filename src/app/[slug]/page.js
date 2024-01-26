/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from 'react'

const page = ({ params }) => {
  return (
    <div>
      My Post: {params.slug}
    </div>
  )
}

export default page



