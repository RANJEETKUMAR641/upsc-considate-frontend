import { memo, useCallback, useEffect, useState } from 'react'

import { isEqual, isEmpty, get } from 'lodash'
import {
  useApplicationData,
  useGetCandidatePost,
  useUpsertApp,
} from './mutations/useFormData'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

import CancelIcon from '@mui/icons-material/Cancel'

import TabsHorizontal from './tabs'
import { OverlayLoader } from 'app/components/OverlayLoader'
import ApplicationCheckList from './application_checklist'
import { getApplicationModules } from './utils/getApplicationModules'
import { FormFeedback } from 'reactstrap'
import { Link } from 'react-router-dom'

const candidate_application = memo((props: any) => {
  const [showValidations, setShowValidations] = useState<boolean>(true)
  const { data: upsertAppData, mutate: upsertAppMutate } = useUpsertApp() as any
  const [open, setOpen] = useState(false)

  const handleYes = () => {
    upsertAppMutate({ data: { post_id } })
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const post_id = new URLSearchParams(props?.location?.search).get('post_id')

  const { data, mutate: candMutate } = useGetCandidatePost() as any
  const {
    data: appData,
    mutate: applicationMutate,
    isLoading: isLoadingApplication,
  } = useApplicationData() as any

  useEffect(() => {
    applicationMutate({ data: { post_id } })
    candMutate({ data: { post_id } })
  }, [])

  useEffect(() => {
    if (appData?.app_status === 1 && isEmpty(appData?.application)) {
      setOpen(true)
    }
  }, [appData])

  const applicationModules = getApplicationModules(data?.[0]?.modules, appData)

  const handleRefreshClick = useCallback(() => {
    applicationMutate({ data: { post_id } })
    setShowValidations(true)
  }, [])

  const handleOnBeforeChange = useCallback(() => {
    setShowValidations(false)
  }, [])

  if (isLoadingApplication) {
    return <OverlayLoader className="candidate-application" open />
  }

  return (
    <>
      <div className="tabpanelHeading pe-3 ps-3 pt-1 pb-1 w-100 d-flex flex-row align-item-center justify-content-center">
        <h4>{data?.[0]?.post_name} </h4>
        <Link to={`/posts/${post_id}`} style={{ marginTop: 5, marginLeft: 5 }}>
          <i className="fa fa-external-link" />
        </Link>
        {/* {!isEmpty(upsertAppData?.app_id) ||
          (!isEmpty(appData?.application) && (
            <>
              {' '}
              <div className="d-flex align-content-end m-1 ">
                <b>
                  Your application id:{' '}
                  {get(
                    upsertAppData,
                    'app_data',
                    get(appData, 'application.app_id'),
                  )}{' '}
                </b>
              </div>{' '}
            </>
          ))} */}
      </div>

      {appData?.app_status === 1 && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Basic Criteria Matched '}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to apply this post?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={handleYes} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <>
        {showValidations && (
          <ApplicationCheckList validations={appData?.validations} />
        )}

        {isEqual(appData?.app_status, 0) && showValidations && (
          <div className="p-2">
            <div
              className="alert alert-danger d-block"
              style={{ margin: 0, padding: 0 }}
            >
              <h5>
                <CancelIcon fontSize="small" /> Information !!
              </h5>
              <h6 className="text-dark">Please fill eligibility criteria</h6>
            </div>
          </div>
        )}
        <FormFeedback style={{ marginTop: 0 }}>
          Please fill all the * forms
        </FormFeedback>

        <TabsHorizontal
          modules={applicationModules}
          handleOnBeforeChange={handleOnBeforeChange}
          handleRefreshClick={handleRefreshClick}
          allowAsProps
        />
      </>
    </>
  )
})

export default candidate_application
