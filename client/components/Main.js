import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, isLoggedIn } = props

  return (
    <div>
        This is working
      {children}
    </div>
  )
}


/**
 * CONTAINER
 */
/*const mapState = (state) => {
  return {
    isLoggedIn: //!!state.currentUser.id
  }
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState)(Main))*/