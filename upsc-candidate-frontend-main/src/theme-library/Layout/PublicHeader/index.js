import React, { Fragment } from 'react'
import cx from 'classnames'

import { connect } from 'react-redux'
import styled from 'styled-components'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import HeaderLogo from '../AppLogo'

import UserBox from './Components/UserBox'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'reactstrap'
import { Slider } from 'react-burgers'
import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from '../../../app/components/reducers/ThemeOptions'
import HeaderDots from './Components/HeaderDots'
import Notification from './Components/notification'

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
      <>
        <div className="mobileLogo">
          <HeaderLogo />
        </div>
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="desktoplogo">
                <HeaderLogo />
              </div>
            </Col>
            <Col md={6}>
              <div className="header-buttons-right">
                <div className="headerbtnbox">
                  <Link to="/candidate/login" className="me-2 bg-dark">
                    पहले से पंजीकृत/Already Registered
                  </Link>
                </div>
                <div className="headerbtnbox">
                  <Link to="/candidate/otr" className="bg-dark">
                    नवीन पंजीकरण/New Registration
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
      // <Fragment>
      //   <TransitionGroup>
      //     <CSSTransition
      //       component="div"
      //       className={cx('app-header', headerBackgroundColor, {
      //         'header-shadow': enableHeaderShadow,
      //       })}
      //       appear={true}
      //       timeout={1500}
      //       enter={false}
      //       exit={false}
      //       aria-label="Site Header"
      //     >
      //       <div>
      //         <HeaderLogo />
      //         <div
      //           className={cx('app-header__content', {
      //             'header-mobile-open': enableMobileMenuSmall,
      //           })}
      //         >
      //           {userLogin ? (
      //             <>
      //               <div className="app-header-left">
      //                 <LogotextBox className="logoTxtRight">
      //                   <h1>
      //                     संघ लोक सेवा आयोग
      //                     <p>UNION PUBLIC SERVICE COMMISSION</p>
      //                   </h1>
      //                 </LogotextBox>
      //                 {/* <SearchBox /> */}
      //                 {/* <MegaMenu /> */}
      //               </div>
      //               <div className="app-header-right">
      //                 <Notification />
      //                 {/* <HeaderDots /> */}
      //                 <UserBox />
      //               </div>
      //             </>
      //           ) : (
      //             <>
      //               <div className="app-header-left">
      //                 <LogotextBox className="logoTxtRight">
      //                   <h1>
      //                     संघ लोक सेवा आयोग
      //                     <p>UNION PUBLIC SERVICE COMMISSION</p>
      //                   </h1>
      //                 </LogotextBox>
      //                 {/* <SearchBox /> */}
      //                 {/* <MegaMenu /> */}
      //               </div>
      //               <div className="app-header-right-public">
      //                 <div>
      //                   <Link to="/candidate/login" className="me-2">
      //                     <Button variant="secondary">
      //                       {' '}
      //                       पहले से पंजीकृत/Already Registered
      //                     </Button>{' '}
      //                   </Link>
      //                 </div>
      //                 <div>
      //                   <Link to="/candidate/otr">
      //                     <Button variant="secondary">
      //                       {' '}
      //                       नवीन पंजीकरण/New Registration
      //                     </Button>{' '}
      //                   </Link>
      //                 </div>
      //               </div>
      //             </>
      //           )}
      //         </div>
      //       </div>
      //     </CSSTransition>
      //   </TransitionGroup>
      // </Fragment>
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
