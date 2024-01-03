import { styled, lighten, darken, alpha } from '@mui/material/styles'
import { DataGrid, gridClasses, GridToolbar } from '@mui/x-data-grid'

interface Props {}

const getBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7)

const getHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6)

const getSelectedBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5)

const getSelectedHoverBackgroundColor = (color: string, mode: string) =>
  mode === 'dark' ? darken(color, 0.4) : lighten(color, 0.4)

export const DataStyle = styled(DataGrid)(({ theme }) => {
  const borderColor =
    theme.palette.mode === 'light'
      ? lighten(alpha(theme.palette.divider, 1), 0.88)
      : darken(alpha(theme.palette.divider, 1), 0.68)

  const selectedCellBorder = alpha(theme.palette.primary.main, 0.5)

  return {
    ['& .row-read-only']: {
      backgroundColor: '#fffff6',
      '&:hover': {
        backgroundColor: '#fffff6',
      },
      '&.Mui-selected': {
        backgroundColor: '#fffff6',
        '&:hover': {
          backgroundColor: '#fffff6',
        },
      },
    },
    [`& .${gridClasses.cell}`]: {
      border: `1px solid transparent`,
      borderRight: `0.5px solid ${borderColor}`,
      borderBottom: `0.5px solid ${borderColor}`,
    },
    [`& .${gridClasses.cell}.Mui-selected`]: {
      borderColor: alpha(theme.palette.primary.main, 0.1),
    },
    [`& .${gridClasses.cell}.Mui-selected.${gridClasses['cell--rangeTop']}`]: {
      borderTopColor: selectedCellBorder,
    },
    [`& .${gridClasses.cell}.Mui-selected.${gridClasses['cell--rangeBottom']}`]:
      {
        borderBottomColor: selectedCellBorder,
      },
    [`& .${gridClasses.cell}.Mui-selected.${gridClasses['cell--rangeLeft']}`]: {
      borderLeftColor: selectedCellBorder,
    },
    [`& .${gridClasses.cell}.Mui-selected.${gridClasses['cell--rangeRight']}`]:
      {
        borderRightColor: selectedCellBorder,
      },
    [`& .${gridClasses.columnHeader}`]: {
      background: '#f7f7f7',
      border: `0.5px solid ${borderColor}`,
      borderBottom: `0.5px solid ${borderColor}`,
    },
    [`& .${gridClasses.iconSeparator}`]: {
      color: 'var(--bs-warning)',
      border: `0.5px solid ${borderColor}`,
      borderBottom: `0.5px solid ${borderColor}`,
    },
  }
})

// Define a custom style for the GridToolbar
export const CustomGridToolbar = styled(GridToolbar)(({ theme }) => ({
  backgroundColor: '#000', // Change the background color to your desired color
  color: '#fff', // Change the text color to ensure readability
  borderBottom: `1px solid #000`, // Add a bottom border for separation
}))
