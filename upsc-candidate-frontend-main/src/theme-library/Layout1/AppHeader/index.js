import React, { Fragment } from 'react'
import cx from 'classnames'

import { connect } from 'react-redux'
import styled from 'styled-components'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import HeaderLogo from '../AppLogo'

// import SearchBox from './Components/SearchBox';
// import MegaMenu from './Components/MegaMenu';
import UserBox from './Components/UserBox'

import HeaderDots from './Components/HeaderDots'

import { Slider } from 'react-burgers'
import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from '../../reducers/ThemeOptions'
const LogotextBox = styled.div`
  h1 {
    font-size: 1rem;
    margin: 10px 0 0;
    padding-left: 0.5rem;
    font-weight: 700;
    position: relative;
    overflow: hidden;
    height: 45px;
    transition: 0.3s;
  }
  p {
    font-size: 9px;
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
            className={cx('app-header', headerBackgroundColor, {
              'header-shadow': enableHeaderShadow,
            })}
            appear={true}
            timeout={1500}
            enter={false}
            exit={false}
          >
            <div>
              <HeaderLogo />
              <div
                className={cx('app-header__content', {
                  'header-mobile-open': enableMobileMenuSmall,
                })}
              >
                {userLogin ? (
                  <>
                    <div className="app-header-left">
                      <div
                        onClick={this.toggleEnableClosedSidebar}
                        className="d-none d-sm-block"
                      >
                        <Slider
                          width={26}
                          lineHeight={2}
                          lineSpacing={5}
                          color="#6c757d"
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
                      {/* <HeaderDots /> */}
                      <UserBox />
                    </div>
                  </>
                ) : (
                  <div className="app-header-right">
                    {/* <HeaderDots /> */}
                    {/* <UserBox /> */}
                    <button className="btn btn-primary">
                      One Time Registration (OTR)
                    </button>
                  </div>
                )}
              </div>
            </div>
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
