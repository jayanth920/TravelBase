import React from 'react'
import AnimatedCursor from "react-animated-cursor"
function AnimCursor() {
  return (
    <AnimatedCursor
      innerSize={13}
      outerSize={15}
      color='230, 230, 250'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default AnimCursor