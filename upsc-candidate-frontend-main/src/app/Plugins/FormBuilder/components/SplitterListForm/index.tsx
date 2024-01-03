/*
 *
 * SplitterListForm
 *
 */

import React, { memo, useCallback, useEffect, useState } from 'react'
import moment from 'moment'
import { useFormState } from 'react-hook-form'
import {
  Card,
  CardBody,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap'

import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, includes, toString, isEqual, forEach } from 'lodash'
// splitter
import SplitterLayout from 'react-splitter-layout'
import 'react-splitter-layout/lib/index.css'
// import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex'
// import 'react-reflex/styles.css'
// mi lib
import { Box } from '@mui/material'
import RefreshIcon from '@mui/icons-material/Refresh'
import OpenWithIcon from '@mui/icons-material/OpenWith'
import AddIcon from '@mui/icons-material/Add'
import TableRowsIcon from '@mui/icons-material/TableRows'

// icons
import { CgMinimize } from '@react-icons/all-files/cg/CgMinimize'

// custom components
import { ModalBox } from 'app/components/ModalBox/Index'
import { MIDataGridComponent } from 'app/Plugins/FormBuilder/plugins/MIDataGrid'

import { Form } from 'app/Plugins/FormBuilder/components/Form'
import { getPKeysPayload } from 'utils/getDefaultValue'

import { selectForms, selectInitData } from '../../selectors'

import { useWindowDimensions } from 'app/Plugins/utils/useWindowDimensions'
import { SplitterStyle } from './SplitterStyle/Splitter.style'
import { useFormBuilderSlice } from '../../slice'

interface Props {
  formId: string
  iconsRightCorner?: React.ReactNode
  methods: any
  handleSubmit: (...args) => void
  columnUICB?: (...args) => React.ReactNode
  apiRefCB?: (...args) => React.ReactNode
  upsertSuccess: any
  disabled: boolean
  onPKeysChange?: any
  CustomToolbar?: (...args) => void
  gridData?: any
  schemaData?: any
  formRowData?: any
  isFormLoading?: boolean
  isListLoading?: boolean
  listRes: any
  getFormDataOnRow: (...args) => void
  listMutate: (...args) => void
  notShowForm?: boolean
  pluginProps: any
  updateRes: any
  formRowDataRes: any
}

export const SplitterListForm = memo(
  ({
    formId,
    methods,
    handleSubmit,
    columnUICB,
    upsertSuccess,
    disabled = false,
    onPKeysChange,
    // CustomToolbar = (...args) => { },
    gridData = [],
    formRowData,
    isListLoading = false,
    listRes,
    getFormDataOnRow,
    listMutate,
    pluginProps,
    updateRes,
    formRowDataRes,
    schemaData,
    notShowForm,
  }: Props) => {
    const { actions } = useFormBuilderSlice()
    const getFormSchemas = useSelector(selectForms)
    const getInitData = useSelector(selectInitData)
    const dispatch = useDispatch()

    const [secondaryPaneSize, setSecondaryPaneSize] = useState(-1)
    const [getHeight, setHeight] = useState(0)
    const { height } = useWindowDimensions()
    const filterElement = document.getElementById('filter_form')

    const { touchedFields, dirtyFields } = useFormState()

    useEffect(() => {
      if (filterElement) {
        const filterHeight = filterElement.offsetHeight
        const finalHeight = height - filterHeight - 100
        setHeight(finalHeight)
      } else if (!filterElement) {
        const finalHeight = height - 115
        setHeight(finalHeight)
      } else {
        setHeight(800)
      }
    }, [])

    const [modal, setModal] = useState(false)
    const [rowData, setRowData] = useState({})
    const [isWarningModal, setWarningModal] = useState<boolean>(false)
    const [gridsizecover, setGridsizecover] = useState(true)
    const [formsizecover, setFormsizecover] = useState(true)
    const [fullscreen, setFullscreen] = useState(true)
    const [showDatabtn, setShowDatabtn] = useState<Boolean>(false)

    useEffect(() => {
      const handleFullscreenChange = () => {
        if (document?.fullscreenElement === null) {
          setFullscreen(true)
        }
      }
      document?.addEventListener('fullscreenchange', handleFullscreenChange)
      return () => {
        document?.removeEventListener(
          'fullscreenchange',
          handleFullscreenChange,
        )
      }
    }, [])

    const handleOnMobileTableRowClick = useCallback(
      (item) => {
        const getFormPKeyId = getFormSchemas?.[formId]?.pKeyId
        const getFormPKeys = getFormSchemas?.[formId]?.pKeys

        const keys = getPKeysPayload(item, getFormPKeys, getFormPKeyId)

        dispatch(actions.setInitData(keys))

        getFormDataOnRow({ ...keys })
        setModal(true)
      },
      [getFormSchemas, formId, getInitData],
    )
    const [formActive, setFormActive] = useState(true)

    const handleOnRowClick = useCallback(
      (rowData) => {
        if (pluginProps?.handleChangeData) {
          pluginProps?.handleChangeData(rowData)

          const payload = {
            ...rowData,
            ...rowData?.changed_data,
          }

          setRowData(payload)
        }
        const getFormPKeyId = getFormSchemas?.[formId]?.pKeyId
        const getFormPKeys = getFormSchemas?.[formId]?.pKeys

        const keys = getPKeysPayload(rowData, getFormPKeys, getFormPKeyId)

        // TODO: need to enhance this feature, keys are conflicting with filter rows
        // if (!isEmpty(touchedFields) && !isEmpty(dirtyFields)) {
        //   setWarningModal(true)
        //   setTableKeys(keys)
        // } else {
        //   getFormDataOnRow({ ...keys })
        // }

        getFormDataOnRow({ ...keys })

        // notShowForm

        onSecondaryPaneSizeChange(500)
        setFormsizecover(false)
        setGridsizecover(true)
        setFormActive(false)
        setShowDatabtn(true)
      },
      [getFormSchemas, formId, getInitData, touchedFields, dirtyFields],
    )

    const getFormTableHeight = useCallback(() => {
      const tableViewEle = document.getElementsByClassName(
        'ag-root-wrapper ag-ltr ag-layout-normal',
      )[1] as HTMLBaseElement

      const tableViewHeight = tableViewEle?.offsetHeight

      return tableViewHeight + 170
    }, [])

    // const agridfullsize = () => {
    //   if (gridsizecover) {
    //     setGridsizecover(false)
    //   }

    //   if (!gridsizecover) {
    //     setGridsizecover(true)
    //   }
    // }
    // useEffect(() => {
    //   const handleFullscreenChange = () => {
    //     if (document.fullscreenElement === null) {
    //       setFullscreen(true)
    //     }
    //   }
    //   document.addEventListener('fullscreenchange', handleFullscreenChange)
    //   return () => {
    //     document.removeEventListener('fullscreenchange', handleFullscreenChange)
    //   }
    // }, [])
    const handleFullScreenClick = (e) => {
      const fullscreendata = document.getElementById('data')
      if (fullscreen) {
        setFullscreen(false)
        fullscreendata?.requestFullscreen()
        e === 'table' && setGridsizecover(false)
        if (e === 'form') {
          setFormsizecover(false)
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
          setGridsizecover(true)
          setFullscreen(true)
        } else if ((document as any).webkitExitFullscreen) {
          ;(document as any).webkitExitFullscreen()

          setGridsizecover(true)
          setFullscreen(true)
        }
      }
    }

    const formfullsize = () => {
      setFormsizecover(true)
      setGridsizecover(false)
      //onSecondaryPaneSizeChange(300)
      // if (formsizecover) {
      //   onSecondaryPaneSizeChange(500)
      //   setFormsizecover(false)
      // } else {
      //   onSecondaryPaneSizeChange(300)
      //   setFormsizecover(true)
      // }
    }

    const handleFormIdReceived = (close: boolean) => {
      setModal(close)
    }

    const handleCancel = () => {
      setWarningModal(false)
    }

    const handleOK = useCallback(() => {
      setWarningModal(false)
    }, [])

    const handleFormSubmit = useCallback(
      (values) => {
        handleSubmit(values)
      },
      [handleSubmit],
    )

    const getTableData = useCallback((getInitData, formId) => {
      if (!isEmpty(formId)) {
        listMutate({
          formId: formId,
          data: {},
          initData: getInitData,
        } as any)
      }
    }, [])

    useEffect(() => {
      if (!isEmpty(upsertSuccess)) {
        getTableData(getInitData, formId)
      }
    }, [upsertSuccess])

    const handleTableRefresh = useCallback(() => {
      getTableData(getInitData, formId)
    }, [])

    useEffect(() => {
      if (formRowData) {
        for (const [key, value] of Object.entries(
          Object.assign(formRowData?.[0], { ...getInitData }),
        )) {
          // to do shobhit : need to check with schema
          const valueS = includes(toString(value), 'T00')
            ? moment(toString(value)).format('YYYY-MM-DD')
            : value
          methods.setValue(key, valueS || '')
        }
      }
    }, [formRowData, getInitData])

    useEffect(() => {
      if (updateRes) {
        setFormActive(true)
        setFormsizecover(true)
      }
    }, [updateRes])

    const onSecondaryPaneSizeChange = (size) => {
      setSecondaryPaneSize(size)
    }

    const renderForm = useCallback(() => {
      if (formActive) return <React.Fragment />

      if (gridsizecover && !formActive) {
        return (
          <div className="pane-content">
            {!modal && (
              <div style={{ height: getFormTableHeight() }}>
                <Card className="main-card">
                  <CardBody className="p-0">
                    <Form
                      pluginProps={pluginProps}
                      getHeight={getHeight}
                      formId={formId}
                      methods={methods}
                      res={formRowDataRes}
                      handleSubmit={handleFormSubmit}
                      secondaryPaneSize={secondaryPaneSize}
                      isHavingList
                      disabled={disabled}
                      onPKeysChange={onPKeysChange}
                      schemaData={schemaData}
                      rowData={rowData}
                      resizebtn={
                        <>
                          {/* <button
                            className="btn btn-transparent ps-2 pe-2 pt-0 pb-0"
                            onClick={() => formfullsize()}
                            id="sectionFull"
                          >
                            {formsizecover ? (
                              <WestIcon fontSize="small" />
                            ) : (
                              <EastIcon fontSize="small" />
                            )}
                          </button> */}
                          {showDatabtn && (
                            <>
                              {/* <button
                                className="btn btn-transparent p-0 pe-0 me-1"
                                style={{ height: '24px' }}
                                onClick={() => formfullsize()}
                                id="sectionFull"
                              >
                                <TableRowsIcon fontSize="small" />
                              </button>

                              <UncontrolledTooltip
                                placement="bottom"
                                target={'sectionFull'}
                              >
                                Show List
                              </UncontrolledTooltip> */}
                            </>
                          )}
                        </>
                      }
                      fullscreen={
                        <>
                          <button
                            className="btn btn-transparent p-0 pe-0 me-1"
                            style={{ height: '24px' }}
                            onClick={() => formfullsize()}
                            id="sectionFull"
                          >
                            <TableRowsIcon fontSize="small" />
                          </button>

                          <UncontrolledTooltip
                            placement="bottom"
                            target={'sectionFull'}
                          >
                            Show List
                          </UncontrolledTooltip>
                          <button
                            className="btn btn-transparent ps-2 pe-2 pt-0 pb-0"
                            onClick={() => handleFullScreenClick('form')}
                            id="sectionFullscreen"
                          >
                            {fullscreen ? (
                              <OpenWithIcon fontSize="small" />
                            ) : (
                              <CgMinimize />
                            )}
                          </button>
                          <UncontrolledTooltip
                            placement="bottom"
                            target={'sectionFullscreen'}
                          >
                            Section Full Screen
                          </UncontrolledTooltip>
                        </>
                      }
                    />
                  </CardBody>
                </Card>
              </div>
            )}
          </div>
        )
      }
      return null
    }, [
      formActive,
      gridsizecover,
      modal,
      secondaryPaneSize,
      methods,
      formRowDataRes,
    ])

    const handleOnClickAdd = useCallback(() => {
      onSecondaryPaneSizeChange(500)
      setFormsizecover(false)
      setGridsizecover(true)
      setFormActive(false)
      setShowDatabtn(true)

      // reset form fields
      forEach(getFormSchemas?.[formId]?.columns, (col) =>
        methods.setValue(col, ''),
      )
    }, [getFormSchemas, formId, methods])

    useEffect(() => {
      if (isEqual(listRes?.length, 0) && notShowForm) {
        onSecondaryPaneSizeChange(500)
        setFormsizecover(false)
        setGridsizecover(true)
        setFormActive(false)
        setShowDatabtn(true)
      }

      if (!isEqual(listRes?.length, 0) && notShowForm) {
        onSecondaryPaneSizeChange(500)
        setFormsizecover(true)
        setGridsizecover(true)
        setFormActive(true)
        setShowDatabtn(false)
      }
    }, [listRes, notShowForm])

    return (
      <div>
        <Box sx={{ display: { xl: 'none', md: 'none', xs: 'block' } }}>
          <Card className="main-card mt-2 mb-3">
            <MIDataGridComponent
              data={listRes}
              handleOnRowClick={handleOnMobileTableRowClick}
              schemaData={getFormSchemas?.[formId]?.schema}
              isLoading={isListLoading}
              columnUICB={columnUICB}
              title="Table"
              tabhandle={false}
              opentab={true}
              padding={false}
              pluginProps={pluginProps}
              addBtn={
                pluginProps?.addPermission && (
                  <>
                    <button
                      className="btn btn-secondary p-0 pe-3 me-1"
                      id="datareload"
                      onClick={handleOnClickAdd}
                    >
                      <AddIcon fontSize="small" /> ADD
                    </button>
                    <UncontrolledTooltip
                      placement="bottom"
                      target={'datareload'}
                    >
                      Add Record
                    </UncontrolledTooltip>
                  </>
                )
              }
            />
          </Card>
        </Box>

        <Box
          style={{ height: `${getHeight}px`, position: 'relative' }}
          sx={{ display: { md: 'block', xs: 'none' } }}
          id="data"
        >
          <SplitterStyle>
            <SplitterLayout
              primaryIndex={0}
              primaryMinSize={400}
              secondaryMinSize={300}
              secondaryInitialSize={350}
              onSecondaryPaneSizeChange={onSecondaryPaneSizeChange}
            >
              {formsizecover && (
                <div className="pane-content">
                  <Card className="main-card">
                    <CardBody className="p-0">
                      <MIDataGridComponent
                        getHeight={getHeight}
                        handleOnRowClick={handleOnRowClick}
                        data={!isEmpty(gridData) ? gridData : listRes}
                        schemaData={getFormSchemas?.[formId]?.schema}
                        isLoading={isListLoading}
                        columnUICB={columnUICB}
                        pluginProps={pluginProps}
                        title={`${getFormSchemas?.[formId]?.schema?.title}'s List`}
                        tabhandle={false}
                        opentab={true}
                        padding={false}
                        refreshButton={
                          <>
                            <button
                              className="btn btn-transparent p-0 pe-3"
                              id="datareload"
                              onClick={handleTableRefresh}
                            >
                              <RefreshIcon fontSize="small" />
                            </button>

                            <UncontrolledTooltip
                              placement="bottom"
                              target={'datareload'}
                            >
                              Refresh
                            </UncontrolledTooltip>
                          </>
                        }
                        addBtn={
                          pluginProps?.addPermission && (
                            <>
                              {' '}
                              <button
                                className="btn btn-dark p-0 pe-3"
                                id="datareload"
                                onClick={handleOnClickAdd}
                              >
                                <AddIcon fontSize="small" /> ADD
                              </button>
                              <UncontrolledTooltip
                                placement="bottom"
                                target={'datareload'}
                              >
                                Add Record
                              </UncontrolledTooltip>
                            </>
                          )
                        }
                      />
                    </CardBody>
                  </Card>
                </div>
              )}
              {!formActive && renderForm()}
            </SplitterLayout>
          </SplitterStyle>
        </Box>

        <ModalBox
          open={modal}
          onFormIdReceived={handleFormIdReceived}
          modalData={
            <Form
              formId={formId}
              methods={methods}
              handleSubmit={handleFormSubmit}
              disabled={false}
              onPKeysChange={onPKeysChange}
              pluginProps={{}}
              res={{}}
            />
          }
        />

        <Modal isOpen={isWarningModal}>
          <ModalHeader>Caution!</ModalHeader>
          <ModalBody>
            <b>You are having unsaved data in the form</b>
            <br />
            <br />
            Do you want to proceed with your select?
          </ModalBody>
          <ModalFooter>
            <Button color="link" onClick={handleCancel}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleOK}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
  },
)
