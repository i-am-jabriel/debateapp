import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Router } from 'react-router-dom'
import { Main } from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props
    console.log("routes");

    return (
      <Router>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/products/:prodId" component={SingleProduct} />
            <Route path="/products" component={AllProducts} />
            <Route path="/products?stuff" component={AllProducts} />
             */}
            </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.currentUser.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      console.log('in dispatch')
      dispatch(fetchCurrentUser())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}