/**
 *
 * dashboard
 *
 */

import { memo } from 'react'
import Box from '@mui/material/Box'
import { values, isEmpty } from 'lodash'
import { DataGrid } from '@mui/x-data-grid'
import TabCollaps from 'app/components/TabCollaps'
import { ApplicationStyle } from './style/Application.style'
import InfoIcon from '@mui/icons-material/Info'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

const ApplicationCheckList = memo(({ validations }: any) => {
  const item = values(validations)

  const columns = [
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      maxWidth: 120,
      renderCell: (params: any) => {
        return <strong>{params.row.title}</strong>
      },
    },
    {
      field: 'Status',
      flex: 1,
      sortable: false,
      renderCell: (params: any) => {
        if (params.row.status === 'ok') {
          return (
            <div className="alert alert-success d-block">
              <CheckCircleIcon fontSize="small" /> {params.row.status}
              {params.row.message && (
                <div className="text-dark">
                  <strong>
                    <InfoIcon fontSize="small" /> {params.row.message}
                  </strong>
                </div>
              )}
            </div>
          )
        }

        return (
          <div className="alert alert-danger d-block">
            <strong>
              <CancelIcon fontSize="small" /> {params.row.status}
            </strong>
            {params.row.message && (
              <div className="text-dark">
                <strong>
                  <InfoIcon fontSize="small" /> {params.row.message}
                </strong>
              </div>
            )}
          </div>
        )
      },
    },
  ]

  return (
    <Box sx={{ width: '100%' }}>
      <TabCollaps
        title="Eligibility Checklist "
        opentab={true}
        tabhandle={false}
        padding={false}
        data={
          <ApplicationStyle>
            <DataGrid
              sx={{ overflowX: 'scroll' }}
              rows={item}
              getRowId={(data) => data.title}
              columns={columns}
              showCellVerticalBorder
              showColumnVerticalBorder
              columnHeaderHeight={24}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
              hideFooterPagination
              hideFooter
              loading={isEmpty(item)}
            />
          </ApplicationStyle>
        }
      />
    </Box>
  )
})

export default ApplicationCheckList
