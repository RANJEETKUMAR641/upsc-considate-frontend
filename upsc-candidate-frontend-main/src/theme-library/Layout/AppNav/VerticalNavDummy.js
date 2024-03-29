import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import MetisMenu from 'react-metismenu'

import { MainNav } from './NavItems'
import { getItem } from 'utils/storage'

class NavDummy extends Component {
  state = {}

  render() {
    const userInfo = !isEmpty(getItem('token'))
      ? JSON.parse(getItem('token'))
      : {}

    const userEmail = get(userInfo, 'user.email', '')

    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Menu</h5>
        {/* <MetisMenu
          content={MainNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          classNameStateIcon="pe-7s-angle-down"
        /> */}
      </Fragment>
    )
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path)
  }
}

export default withRouter(NavDummy)
