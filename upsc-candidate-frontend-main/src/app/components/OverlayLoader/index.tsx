/**
 *
 * OverlayLoader
 *
 */

import CircularProgress from '@mui/material/CircularProgress'
import { Backdrop } from '@mui/material'

type overLayProps = {
  open: boolean
  className: string
}

export function OverlayLoader({ open, className }: overLayProps) {
  return (
    <div
      className="loader-container"
      style={{ width: '100%', color: '#333!important' }}
    >
      <div>
        <Backdrop
          sx={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: 'var(--bs-warning)',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            position: 'absolute',
          }}
          open={open}
          className={className}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
}
