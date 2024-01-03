import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { split } from 'lodash'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import AppMobileMenu from '../AppMobileMenu'
import Logo from 'app/assets/images/gov_Logo.png'
import Logo_Dark from 'app/assets/images/logo-dark.png'
import Logo_Light from 'app/assets/images/logo-light.png'

import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from '../../../app/components/reducers/ThemeOptions'

const Logotext = styled.div`
  display: flex;
  margin: 0px 0 0;
  img {
    width: 30px;
    height: 45px;
  }
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

// const Icon = styled.button`
//   width: ${props => (props.enableClosedSidebar ? 30 : 80)};
// `;

class HeaderLogo extends React.Component {
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

  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 230,
    noTouchOpen: false,
    noTouchClose: false,
  }

  render() {
    let { headerBackgroundColor } = this.props

    const logotype = split(headerBackgroundColor, ' ')?.[1]
    return (
      <Fragment>
        <div className="app-header__logo">
          <Logotext className="logoTxt">
            <img
              src={`${
                logotype === 'header-text-light' ? Logo_Light : Logo_Dark
              }`}
              alt="Logo"
            />
            <Typography variant="h1">
              संघ लोक सेवा आयोग
              <p>UNION PUBLIC SERVICE COMMISSION</p>
            </Typography>
            {!this.props.enableClosedSidebar ? null : null}
          </Logotext>
          {/* <div className="logo-src" /> */}
          {/* <div className="header__pane ms-auto">
            <div onClick={this.toggleEnableClosedSidebar}>
              <Slider
                width={26}
                lineHeight={2}
                lineSpacing={5}
                color="#6c757d"
                active={this.state.active}
                onClick={() => this.setState({ active: !this.state.active })}
              />
            </div>
          </div> */}
        </div>
        <AppMobileMenu />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,

  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
})

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo)
