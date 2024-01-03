import React, { Fragment } from 'react'

import { clear, getItem, removeItem } from 'utils/storage'
import { isEmpty, get } from 'lodash'

import {
  DropdownToggle,
  DropdownMenu,
  Button,
  UncontrolledButtonDropdown,
} from 'reactstrap'

import { toast, Bounce } from 'react-toastify'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAxios } from 'utils/useAxios'
import 'react-toastify/dist/ReactToastify.css'

// import city3 from 'app/assets/utils/images/dropdown-header/city3.jpg';
import avatar1 from 'app/assets/utils/images/avatars/blank-profile-picture.jpg'
import { requestPayload } from 'utils/requestPayload'

class UserBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.handleOnLogOutClick = this.handleOnLogOutClick.bind(this)
  }

  notify2 = () =>
    (this.toastId = toast(
      "You don't have any new items in your calendar for today! Go out and play!",
      {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success',
      },
    ))

  handleOnLogOutClick = async (e) => {
    e.preventDefault()
    const payload = {
      ...(getItem('token')?.user?.type?.toString()?.length !== 0 && {
        usertype: getItem('token')?.user?.type,
      }),
      email: getItem('token')?.email,
    }
    const url = '/logout'

    await requestPayload(payload, url)

    removeItem('token')
    window.location.href = '/'
  }

  render() {
    const userInfo = !isEmpty(getItem('token')) ? getItem('token') : {}

    const removeAfterAt = (string) => {
      const index = string.indexOf('@')
      if (index !== -1) {
        return string.slice(0, index)
      }
      return string
    }

    return (
      <Fragment>
        <div className="header-btn-lg pe-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="link" className="p-0">
                    <img
                      width={42}
                      height={42}
                      className="rounded-circle"
                      src={avatar1}
                      alt=""
                    />
                    <FontAwesomeIcon
                      className="ms-2 opacity-8"
                      icon={faAngleDown}
                    />
                  </DropdownToggle>
                  <DropdownMenu end className="rm-pointers dropdown-menu-lg">
                    <div className="ps-3 pe-3">
                      <div className="dropdown-menu-header-inner">
                        <div
                          className="menu-header-image opacity-2"
                          // style={{
                          //   backgroundImage: 'url(' + city3 + ')',
                          // }}
                        />
                        <div className="menu-header-content text-start">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left me-3">
                                <img
                                  width={42}
                                  height={42}
                                  className="rounded-circle"
                                  src={avatar1}
                                  alt=""
                                />
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  {get(userInfo, 'user.name', '')}
                                </div>
                                <hr />
                                <div className="widget-heading">
                                  {get(userInfo, 'user.registrationid', '')}
                                </div>
                              </div>
                              <div className="widget-content-right me-2">
                                <Button
                                  className="btn-pill btn-shadow btn-shine"
                                  color="focus"
                                  onClick={this.handleOnLogOutClick}
                                  aria-label="Logout"
                                >
                                  Logout
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div
                      className="scroll-area-xs"
                      style={{
                        height: '150px',
                      }}
                    >
                       <PerfectScrollbar>
                        <Nav vertical>
                          <NavItem className="nav-item-header">
                            Activity
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Chat
                              <div className="ms-auto badge rounded-pill bg-info">
                                8
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">Recover Password</NavLink>
                          </NavItem>
                          <NavItem className="nav-item-header">
                            My Account
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Settings
                              <div className="ms-auto badge bg-success">
                                New
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">
                              Messages
                              <div className="ms-auto badge bg-warning">
                                512
                              </div>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#">Logs</NavLink>
                          </NavItem>
                        </Nav>
                      </PerfectScrollbar>
                    </div> */}
                    {/* <Nav vertical>
                      <NavItem className="nav-item-divider mb-0" />
                    </Nav>
                    <div className="grid-menu grid-menu-2col">
                      <Row className="g-0">
                        <Col sm="6">
                          <Button
                            className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2"
                            outline
                            color="warning"
                          >
                            <i className="pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2">
                              {' '}
                            </i>
                            Message Inbox
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button
                            className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2"
                            outline
                            color="danger"
                          >
                            <i className="pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2">
                              {' '}
                            </i>
                            <b>Support Tickets</b>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                    <Nav vertical>
                      <NavItem className="nav-item-divider" />
                      <NavItem className="nav-item-btn text-center">
                        <Button size="sm" className="btn-wide" color="primary">
                          Open Messages
                        </Button>
                      </NavItem>
                    </Nav> */}
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
              <div className="widget-content-left  ms-3 header-user-info">
                <div className="widget-heading">
                  {get(userInfo, 'user.name', '')}
                </div>
              </div>
              {/* <div className="widget-content-right header-user-info ms-3">
                <Button
                  className="btn-shadow p-1"
                  size="sm"
                  onClick={this.notify2}
                  color="info"
                  id="Tooltip-1"
                >
                  <IoIosCalendar color="#ffffff" fontSize="20px" />
                </Button>
                <UncontrolledTooltip placement="bottom" target={'Tooltip-1'}>
                  Click for Toastify Notifications!
                </UncontrolledTooltip>
              </div> */}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default UserBox
