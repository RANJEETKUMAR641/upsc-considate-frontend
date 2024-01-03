/* eslint-disable */

import React, { memo, useState, useEffect } from 'react'
import {
  isEmpty,
  get,
  includes,
  filter,
  map,
  join,
  isEqual,
  toString,
  isObject,
} from 'lodash'
import { Tooltip } from '@mui/material'
import { getTableColumns } from 'utils/getTableCols'
import moment from 'moment'
import { DataStyle } from './data.styles/data.style'
import { UncontrolledTooltip } from 'reactstrap'

import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid'

import OpenWithIcon from '@mui/icons-material/OpenWith'
import { OverlayLoader } from 'app/components/OverlayLoader'
import { FileViewModal } from 'app/components/FileViewModal'

interface Props {
  getHeight?: number
  data: any
  schemaData?: any
  isLoading: boolean
  agHeight?: any
  columnUICB?: (...args) => any
  apiRefCB?: (...args) => any
  title?: string
  tabhandle?: boolean
  opentab?: boolean
  padding?: boolean
  resizebtn?: React.ReactNode
  fullscreen?: React.ReactNode
  refreshButton?: React.ReactNode
  addBtn?: React.ReactNode
  handleOnRowClick?: (...args) => void
  pluginProps?: any
}

export const MIDataGridComponent: React.FC<Props> = memo(
  ({
    getHeight,
    data,
    schemaData,
    columnUICB = () => {},
    resizebtn = '',
    refreshButton = '',
    addBtn = '',
    handleOnRowClick = () => {},
    isLoading,
    pluginProps,
  }: Props) => {
    const tableRows = map(data || [], (item: any, index: any) => {
      return {
        ...item,
        id: index,
      }
    })

    const tableColums = getTableColumns(schemaData)

    const handleCellClicked = (event) => {
      if (event.field === 'Actions') {
        handleOnRowClick(event.row)
      }
      return false
    }

    const renderCellValue = (colDef: any, value) => {
      const component = colDef?.component

      switch (component) {
        case 'reactselect':
          const optionData = colDef?.options?.data

          if (isEmpty(optionData)) {
            return value
          }

          const isArrayValue = Array.isArray(value)

          if (isArrayValue) {
            const displayOptions = filter(optionData, (option) =>
              includes(value, option?.value),
            )

            return join(
              map(displayOptions, (option) => option?.label),
              ',',
            )
          }

          const displayOptions = filter(optionData, (option) =>
            isEqual(toString(option?.value), toString(value)),
          )

          return join(
            map(displayOptions, (option) => option?.label),
            ',',
          )

        case 'datepicker':
          return moment(value).format('DD/MM/YYYY')

        default:
          return isObject(value) ? JSON.stringify(value) : value
      }
    }
    const valueFormatter = (props) => {
      return renderCellValue(
        props?.api.getColumn(props?.field),
        get(props, 'value', '-'),
      )
    }

    const handleRenderCell = (props) => {
      if (isEqual(get(props, 'colDef.component'), 'fileinput')) {
        return (
          <FileViewModal
            fileName={props.value}
            paramData={{
              formid: props?.row?.formid,
              registrationid: props?.row?.registrationid,
              module: isEmpty(props?.row?.registrationid) ? 'ora' : 'candidate',
              fieldValue: props?.row?.sdocument,
              field: 'sdocument',
            }}
          />
        )
      }

      if (props.field === 'Actions' && !props?.row?.isreadonly) {
        if (pluginProps.isreadonly) {
          return (
            <Tooltip title="Operation is not permitted">
              <i className="fa fa-ban" />
            </Tooltip>
          )
        }

        return (
          <button className="btn btn-transparent" onClick={handleOnRowClick}>
            <i className="fa fa-edit" />
          </button>
        )
      }

      if (props.field === 'Actions' && props?.row?.isreadonly) {
        return (
          <Tooltip title="Operation is not permitted">
            <i className="fa fa-ban" />
          </Tooltip>
        )
      }

      return columnUICB(props)
    }

    const cellStyleWithBorder = {
      borderRight: '1px solid #ccc', // Add vertical border to the right
    }

    const colDefs = [
      { headerName: 'Actions', minWidth: 50, maxWidth: 50, field: 'Actions' },
    ]
      .concat(tableColums)
      .map((columnDef: any) => ({
        headerName: columnDef.title as string,
        field: columnDef.field as string,
        valueFormatter: valueFormatter,
        cellRenderer: (props) => columnUICB(props),
        flex: 1,
        minWidth: 150,
        sortable: true,
        cellStyle: cellStyleWithBorder,
        component: columnDef.component,
        options: columnDef.options,
        renderCell: handleRenderCell,
      }))

    const [fullscreen, setFullscreen] = useState(true)
    const [dataHightAuto, setDataHeightAuto] = useState(true)
    useEffect(() => {
      const handleFullscreenChange = () => {
        if (document.fullscreenElement === null) {
          setFullscreen(true)
        }
      }
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
      }
    }, [])
    const handleFullScreenClick = () => {
      const fullscreendata = document.getElementById('data')
      if (fullscreen) {
        setFullscreen(false)
        fullscreendata?.requestFullscreen()
        setDataHeightAuto(false)
      } else {
        setDataHeightAuto(true)
        if (document.exitFullscreen) {
          document.exitFullscreen()
          setFullscreen(true)
        } else if ((document as any).webkitExitFullscreen) {
          ;(document as any).webkitExitFullscreen()
          setFullscreen(true)
        }
      }
    }

    const CustomToolbar = React.useCallback(() => {
      return (
        <>
          <GridToolbarContainer
            style={{ alignItems: 'stretch', marginTop: '-1px' }}
          >
            <GridToolbarColumnsButton
              className="p-0"
              style={{ color: '#495057' }}
            />
            <GridToolbarFilterButton
              className="p-0"
              style={{ color: '#495057' }}
            />
            <GridToolbarDensitySelector
              className="p-0"
              style={{ color: '#495057' }}
            />
            <GridToolbarExport className="p-0" style={{ color: '#495057' }} />
            {resizebtn}

            <button
              className="btn btn-tranparent p-0"
              id="sectionFullscreen"
              onClick={handleFullScreenClick}
            >
              <OpenWithIcon fontSize="small" />
            </button>
            <UncontrolledTooltip
              placement="bottom"
              target={'sectionFullscreen'}
            >
              Section Full Screen
            </UncontrolledTooltip>
            {refreshButton}
            {addBtn}
          </GridToolbarContainer>
        </>
      )
    }, [])

    const CustomLoadingOverlay = () => {
      // Your custom loading overlay content
      return <OverlayLoader open className="table" />
    }

    return (
      <>
        <div style={{ overflowX: 'hidden' }}>
          <div
            id="gridHight"
            style={{
              height: dataHightAuto ? `${getHeight}px` : 'calc(100% - 150px)',
            }}
          >
            <DataStyle
              slots={{
                toolbar: CustomToolbar,
                loadingOverlay: CustomLoadingOverlay,
              }}
              columns={colDefs}
              rows={!isLoading && !isEmpty(tableRows) ? tableRows : []}
              sx={{
                '--DataGrid-overlayHeight': '300px',
                borderRadius: '0',
                minHeight: 300,
                '& .MuiDataGrid-cell': {
                  display: 'block',
                },
              }}
              rowSpacingType="margin"
              getRowClassName={(params) =>
                `${
                  params.row.isreadonly || pluginProps.isreadonly
                    ? 'row-read-only'
                    : ''
                }`
              }
              onCellClick={handleCellClicked}
              // getRowHeight={() => 'auto'}
              getRowHeight={({ densityFactor }) => {
                if (densityFactor === 0.7) {
                  return 'auto' || 24 * densityFactor
                }
                if (densityFactor === 1) {
                  return 'auto' || 30 * densityFactor
                }
                if (densityFactor === 1.3) {
                  return 'auto'
                }

                return 'auto'
              }}
              columnHeaderHeight={34}
              hideFooterPagination
              hideFooter
              loading={isLoading}
            />
          </div>
        </div>
      </>
    )
  },
)
