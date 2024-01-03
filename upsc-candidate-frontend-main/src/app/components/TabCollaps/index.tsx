/**
 *
 * TabCollaps
 *
 */

import { useState } from 'react'
import { connect } from 'react-redux'
import {
  setEnableClosedSidebar,
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from 'app/components/reducers/ThemeOptions'

import Skeleton from '@mui/material/Skeleton'
import { Card, CardBody, UncontrolledTooltip } from 'reactstrap'

import { Collapse } from 'react-collapse'
import get from 'lodash/get'
import { isEmpty } from 'lodash'

import { RiArrowDownSLine } from '@react-icons/all-files/ri/RiArrowDownSLine'
import { RiArrowUpSLine } from '@react-icons/all-files/ri/RiArrowUpSLine'
import { HeaderStyle } from './style/Header.style'

interface Props {
  title: string
  // formId :any
  data: any
  opentab: boolean
  tabhandle: boolean
  padding: boolean
  resizebtn?: any
  fullscreen?: any
  refreshButton?: any
  addBtn?: any
  tabsAlignIcon?: any
  downloadButton?: any
  CustomGridToolbar?: any
}

const TabCollaps = (props: Props) => {
  const {
    title,
    data,
    opentab,
    tabhandle,
    padding,
    resizebtn,
    fullscreen,
    refreshButton,
    downloadButton,
    addBtn,
    tabsAlignIcon,
    // formId
  } = props
  const [isOpen, setIsOpen] = useState(opentab)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Card className="main-card" style={{ border: '0.1px solid #dee2e6' }}>
        <HeaderStyle
          className={get(props, 'headerBackgroundColor')}
          style={{ display: 'block' }}
        >
          <div className="headerbgOverlay">
            {!isEmpty(title) ? (
              <h5 className="app-sidebar__heading">{title}</h5>
            ) : (
              title !== null && (
                <Skeleton
                  variant="text"
                  className="w-75"
                  style={{ height: 30 }}
                />
              )
            )}
            <div className="headingIcon">
              {resizebtn}
              {fullscreen}
              {refreshButton}
              {tabsAlignIcon}
              {downloadButton}
              {tabhandle && (
                <>
                  <button
                    className="btn btn-transparent ps-2 pe-2 pt-0 pb-0"
                    onClick={handleToggle}
                    id="FilterOpn"
                  >
                    {isOpen ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
                  </button>
                  <UncontrolledTooltip placement="bottom" target={'FilterOpn'}>
                    Hide/Show
                  </UncontrolledTooltip>
                </>
              )}
              {addBtn}
            </div>
          </div>
        </HeaderStyle>
        <Collapse isOpened={isOpen}>
          <CardBody className={`p-0 mb-0  ${!padding ? 'p-0' : undefined}`}>
            {data}
          </CardBody>
        </Collapse>
      </Card>
    </div>
  )
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

export default connect(mapStateToProps, mapDispatchToProps)(TabCollaps)
