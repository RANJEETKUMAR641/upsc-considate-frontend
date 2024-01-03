import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setEnableMobileMenu } from 'app/components/reducers/ThemeOptions'

import ListItemText from '@mui/material/ListItemText'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { MenuStyle } from './menu.style'

const Nav = ({
  enableMobileMenu,
  setEnableMobileMenu,
  backgroundColor,
  menuData = [],
}) => {


  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const [openItems, setOpenItems] = useState({}) // State to track open/closed items

  const toggleMobileSidebar = () => {
    setEnableMobileMenu(!enableMobileMenu)
  }

  const handleClick = (itemLabel) => {
    // Trim the itemLabel to remove leading/trailing spaces
    const trimmedLabel = itemLabel.trim()

    setOpenItems((prevState) => ({
      ...prevState,
      [trimmedLabel]: !prevState[trimmedLabel],
    }))
  }

  return (
    <div>
      {menuData?.menu?.map((menuItem) => {
        const { icon, label, content, to } = menuItem

        return (
          <div className="mainmenulist">
            <MenuStyle className="hidemenus">
              <Accordion
                expanded={expanded === label}
                onChange={handleChange(label)}
              >
                {to ? (
                  <NavLink
                    to={to}
                    activeClassName="active"
                    style={{ color: '#fff' }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <span className="menuIcons">
                        <i className={icon} />
                      </span>
                      <span className="menuText">{label}</span>
                    </AccordionSummary>
                  </NavLink>
                ) : (
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <span className="menuIcons">
                      <i className={icon} />
                    </span>
                    <span className="menuText">{label}</span>
                  </AccordionSummary>
                )}

                {content?.length > 0 &&
                  content?.map((subMenuItem) => (
                    <AccordionDetails>
                      <NavLink to={subMenuItem.to} activeClassName="active">
                        <ListItemText primary={subMenuItem.label} />
                      </NavLink>
                    </AccordionDetails>
                  ))}
              </Accordion>
            </MenuStyle>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  enableMobileMenu: state?.ThemeOptions?.enableMobileMenu,
})

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
