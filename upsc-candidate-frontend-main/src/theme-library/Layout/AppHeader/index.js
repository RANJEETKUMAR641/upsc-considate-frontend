import React, { Fragment } from 'react'
import cx from 'classnames'

import { connect } from 'react-redux'
import styled from 'styled-components'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { IoIosAnalytics, IoIosNotifications } from 'react-icons/io'

import HeaderLogo from '../AppLogo'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCheck } from '@fortawesome/free-solid-svg-icons'
import UserBox from './Components/UserBox'
import { Typography } from '@mui/material'
import { Slider } from 'react-burgers'
import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from '../../../app/components/reducers/ThemeOptions'
import HeaderDots from './Components/HeaderDots'
import Notification from './Components/notification'
import { FontIncrease } from './Components/FontIncrease'

const LogotextBox = styled.div`
  h1 {
    font-size: 23.8px;
    margin: 3px 0 0;
    padding-left: 0.5rem;
    font-weight: 700;
    position: relative;
    overflow: hidden;
    height: 45px;
    transition: 0.3s;
  }
  p {
    font-size: 12px;
    margin: 0;
    padding-left: 0;
  }
`
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false,
    }
  }
  toggleEnableClosedSidebar = () => {
    let { enableClosedSidebar, setEnableClosedSidebar } = this.props
    setEnableClosedSidebar(!enableClosedSidebar)
  }

  render() {
    let {
      userLogin,
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition
            component="div"
            className={cx('app-header bg-warning', headerBackgroundColor, {
              'header-shadow': enableHeaderShadow,
            })}
            appear={true}
            timeout={1500}
            enter={false}
            exit={false}
            aria-label="Site Header"
          >
            {userLogin ? (
              <div className="header_auth">
                <HeaderLogo />
                <div
                  className={cx('app-header__content', {
                    'header-mobile-open': enableMobileMenuSmall,
                  })}
                >
                  <>
                    <div className="app-header-left">
                      <div
                        onClick={this.toggleEnableClosedSidebar}
                        className="d-none d-sm-block"
                        role="button"
                        tabIndex={0}
                        aria-label="Toggle Sidebar"
                      >
                        <Slider
                          width={26}
                          lineHeight={2}
                          lineSpacing={5}
                          color="#000000"
                          active={this.state.active}
                          onClick={() =>
                            this.setState({ active: !this.state.active })
                          }
                        />
                      </div>
                      <LogotextBox className="logoTxtRight">
                        <h1>
                          संघ लोक सेवा आयोग
                          <p>UNION PUBLIC SERVICE COMMISSION</p>
                        </h1>
                      </LogotextBox>
                      {/* <SearchBox /> */}
                      {/* <MegaMenu /> */}
                    </div>
                    <div className="app-header-right">
                      {/* <FontIncrease /> */}
                      <Notification />
                      {/* <HeaderDots /> */}
                      <UserBox />
                    </div>
                  </>
                </div>
              </div>
            ) : (
              <div className="header_none_auth">
                <div className="mobileCenterLogo">
                  <HeaderLogo />
                </div>
              </div>
            )}
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,

  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
})

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
