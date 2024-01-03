import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Typography } from '@mui/material'
import AppMobileMenu from '../AppMobileMenu'
import Logo from 'app/assets/images/gov_Logo.png'

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
    width: 250,
    noTouchOpen: false,
    noTouchClose: false,
  }

  render() {
    return (
      <Fragment>
        <div className="app-header__logo">
          <Logotext className="logoTxt">
            <img src={Logo} alt="Logo" />
            <Typography variant="h1">
              संघ लोक सेवा आयोग
              <p>UNION PUBLIC SERVICE COMMISSION</p>
              {/*<p>ऑनलाइन भर्ती आवेदन / Online Recruitment Application (OTR)</p>*/}
            </Typography>
          </Logotext>
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
})

const mapDispatchToProps = (dispatch) => ({
  setEnableClosedSidebar: (enable) => dispatch(setEnableClosedSidebar(enable)),
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo)
