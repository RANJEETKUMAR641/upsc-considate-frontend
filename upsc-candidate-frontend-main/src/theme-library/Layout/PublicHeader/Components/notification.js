import React, { Component, Fragment } from 'react' // Import Component from 'react'

import { IoIosAnalytics, IoIosNotifications } from 'react-icons/io'
import styled from 'styled-components'

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Nav,
  Button,
  NavItem,
} from 'reactstrap'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { AreaChart, Area, ResponsiveContainer } from 'recharts'

import { faArrowLeft, faCog } from '@fortawesome/free-solid-svg-icons'

import CountUp from 'react-countup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bg4 from 'app/assets/utils/images/dropdown-header/abstract4.jpg'
import ChatExample from './TabsContent/TimelineExample'
import TimelineEx from './TabsContent/ChatExample'

// import Flag from 'react-flagkit';

const NotificationCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red; /* Customize the background color */
  color: white; /* Customize the text color */
  border-radius: 50%; /* Make it circular */
  width: 20px; /* Customize the width */
  height: 20px; /* Customize the height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px; /* Customize the font size */
  font-weight: bold;
`

class CustomTabPanel extends Component {
  render() {
    const { children, value, index } = this.props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...this.props.other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
class Notification extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      value: 0,
    }
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue })
  }

  render() {
    const { value } = this.state
    return (
      <Fragment>
        <div className="header-dots">
          <UncontrolledDropdown>
            <DropdownToggle className="p-0" color="link">
              <div className="icon-wrapper icon-wrapper-alt rounded-circle bg-light pt-3">
                <div className="icon-wrapper-bg bg-success" />
                <NotificationCounter>1</NotificationCounter>
                <IoIosNotifications color="#000000" fontSize="23px" />
              </div>
            </DropdownToggle>
            <DropdownMenu end className="dropdown-menu-xl rm-pointers">
              <div className="dropdown-menu-header">
                <div className="dropdown-menu-header-inner bg-premium-dark">
                  <div
                    className="menu-header-image"
                    style={{
                      backgroundImage: 'url(' + bg4 + ')',
                    }}
                  />
                  <div className="menu-header-content text-white">
                    <h5 className="menu-header-title">Notification</h5>
                    <h6 className="menu-header-subtitle">
                      Recent Receive Notifications
                    </h6>
                  </div>
                </div>
              </div>
              <div className="widget-chart">
                <div className="widget-chart-content">
                  <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs
                        value={value}
                        onChange={this.handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth"
                      >
                        <Tab label="Message" {...a11yProps(0)} />
                        <Tab label="Events" {...a11yProps(1)} />
                        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                      </Tabs>
                    </Box>

                    <CustomTabPanel value={value} index={0}>
                      <TimelineEx />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <ChatExample />
                    </CustomTabPanel>
                    {/* <CustomTabPanel value={value} index={2}>
                      Item Three
                    </CustomTabPanel> */}
                  </Box>
                </div>
              </div>
              <Nav vertical>
                <NavItem className="nav-item-divider mt-0"> </NavItem>
                <NavItem className="nav-item-btn text-center">
                  <Button
                    size="sm"
                    className="btn-shine btn-wide btn-pill"
                    color="warning"
                  >
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faCog}
                      spin
                      fixedWidth={false}
                    />
                    Refresh List
                  </Button>
                </NavItem>
              </Nav>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </Fragment>
    )
  }
}

export default Notification
