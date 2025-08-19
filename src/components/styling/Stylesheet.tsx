// CSS Stylesheet
// Inline styling
// CSS Module
// CSS in JS liberary ( styles components)
import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
  const className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
      {/* <h1 className={className}>Stylesheets</h1> */}
      {/* <h1 className='primary'>Stylesheets</h1> */}
    </div>
  )
}

export default StyleSheet
