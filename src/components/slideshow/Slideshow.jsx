import React, { useEffect } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export const Slideshow = ({ item }) => {
  return (
    <Fade>
      {item.img.map(e => (
        <img className={item.name} key={e.url} src={e} />
      ))}
    </Fade>
  )
}
