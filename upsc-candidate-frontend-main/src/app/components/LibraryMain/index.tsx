/**
 *
 * LibraryMain
 *
 */
import React from 'react'
import { get } from 'lodash'
import { connect } from 'react-redux'
import cx from 'classnames'
import { withRouter } from 'react-router-dom'
import Dashboards from '../Dashboard'

class Main extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      closedSmallerSidebar: false,
    }
  }
  render() {
    const {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt,
    } = this.props as any

    return (
      <div
        className={cx(
          `app-container app-theme-${colorScheme}`,
          { 'fixed-header': enableFixedHeader },
          { 'fixed-sidebar': enableFixedSidebar },
          { 'fixed-footer': enableFixedFooter },
          { 'closed-sidebar': enableClosedSidebar },
          {
            'closed-sidebar-mobile': closedSmallerSidebar,
          },
          { 'sidebar-mobile-open': enableMobileMenu },
          { 'body-tabs-shadow-btn': enablePageTabsAlt },
        )}
      >
        <Dashboards menus={get(this, 'props.menuData', [])} />
      </div>
    )
  }
}

const mapStateToProp = (state) => ({
  colorScheme: state?.ThemeOptions?.colorScheme,
  enableFixedHeader: state?.ThemeOptions?.enableFixedHeader,
  enableMobileMenu: state?.ThemeOptions?.enableMobileMenu,
  enableFixedFooter: state?.ThemeOptions?.enableFixedFooter,
  enableFixedSidebar: state?.ThemeOptions?.enableFixedSidebar,
  enableClosedSidebar: state?.ThemeOptions?.enableClosedSidebar,
  enablePageTabsAlt: state?.ThemeOptions?.enablePageTabsAlt,
})

export default withRouter(connect(mapStateToProp)(Main))
