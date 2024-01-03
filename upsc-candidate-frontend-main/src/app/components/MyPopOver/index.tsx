import React, { useCallback } from 'react'
import { isEmpty, get } from 'lodash'
import { styled } from '@mui/material/styles'
import Alert from '@mui/material/Alert'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

const HtmlTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    color: 'rgb(46, 125, 50, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
}))

const HtmlTooltipWrapper = styled('div')`
  margin-bottom: 5px;
  opacity: 0.6;
  margin-right: 7px;
  font-size: 10px;
`
export default function MyPopOver({ col, children }: any) {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleInfo = useCallback((obj) => {
    return (
      <>
        {get(obj, 'minLength.value', get(obj, 'maxlength')) && (
          <li>
            Max Length:{' '}
            <b>{get(obj, 'maxLength.value', get(obj, 'maxlength'))}</b>
          </li>
        )}
        {get(obj, 'minLength.value', get(obj, 'minlength')) && (
          <li>
            Min Length:{' '}
            <b>{get(obj, 'minLength.value', get(obj, 'minlength'))}</b>
          </li>
        )}
        {/* {obj?.max && <li>Max: {obj?.max}</li>}
        {obj?.min && <li>Min: {obj?.min}</li>} */}
      </>
    )
  }, [])

  if (isEmpty(col?.addattrs)) {
    return <div />
  }

  return (
    <HtmlTooltipWrapper>
      <HtmlTooltip
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        placement="top"
        title={
          <Alert severity="success">
            <ul style={{ margin: 0, padding: 0 }}>
              {handleInfo(col?.addattrs)}
            </ul>
          </Alert>
        }
      >
        <InfoOutlinedIcon fontSize="small" />
      </HtmlTooltip>
    </HtmlTooltipWrapper>
  )
}
