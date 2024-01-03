import React from 'react'
import { NavLink } from 'react-router-dom'

import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  NavbarText,
} from 'reactstrap'
import AppLogo from 'theme-library/Layout/AppLogo'
import Digitalindia from 'app/assets/images/digital-india-power-logo.png'
import Azadi from 'app/assets/images/azadi.png'
import HomeIcon from '@mui/icons-material/Home'

import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import QuizIcon from '@mui/icons-material/Quiz'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import KeyIcon from '@mui/icons-material/Key'
import { HeaderPublicStyle } from './HeaderPublic.style'
import { FontIncrease } from 'theme-library/Layout/AppHeader/Components/FontIncrease'

function PublicHeader() {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = React.useState(false)
  const handleNavCollapse = () => {
    setIsOpen(false)
  }

  return (
    <HeaderPublicStyle>
      <Navbar color="warning" fixed="top" light expand="md" className="p-0">
        <NavbarBrand href="/" className="p-0">
          <AppLogo />
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <div className="m-auto">
            <Nav className="m-auto d-block d-sm-none" navbar>
              {/* <NavItem>
                <NavLink
                  to="/posts"
                  activeClassName="active"
                  onClick={handleNavCollapse}
                >
                  <HomeIcon className="me-2" /> <span>New Vacancies</span>
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  to="/candidate/login"
                  activeClassName="active"
                  onClick={handleNavCollapse}
                >
                  <HomeIcon className="me-2" /> <span>Login</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/candidate/otr"
                  activeClassName="active"
                  onClick={handleNavCollapse}
                >
                  <HomeIcon className="me-2" />{' '}
                  <span>One Time Registration</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/candidate/instr_otr" onClick={handleNavCollapse}>
                  <IntegrationInstructionsIcon className="me-2" />{' '}
                  <span>Instructions for OTR</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/candidate/faq" onClick={handleNavCollapse}>
                  <QuizIcon className="me-2" /> <span>FAQ's</span>
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  to={{
                    pathname:
                      'https://upsconline.nic.in/upsc/OTRP/candidate/contact.php',
                  }}
                  target="_blank"
                >
                  <ContactMailIcon className="me-2" /> <span>Contact Us</span>
                </NavLink>
              </NavItem> */}
              {/* <NavItem>
                <NavLink to="/candidate/forgot-password">
                  <KeyIcon className="me-2" /> <span>Forgot Password</span>
                </NavLink>
              </NavItem> */}
            </Nav>
          </div>

          <NavbarText className="p-0">
            <div className="rightLogo">
              <div className="me-3 fontincreseBox">
                <FontIncrease />
              </div>
              <div className="me-3">
                <img src={Digitalindia} alt="" className="img-fluid" />
              </div>
              <div>
                <img src={Azadi} alt="" className="img-fluid" />
              </div>
            </div>
          </NavbarText>
        </Collapse>
      </Navbar>
      <div className="headerHeight" />
    </HeaderPublicStyle>
  )
}

export default PublicHeader
