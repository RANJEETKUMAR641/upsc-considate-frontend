import { Suspense, useCallback, useEffect, useState } from 'react'

import { OverlayLoader } from 'app/components/OverlayLoader'
import { CardTitle } from 'reactstrap'

import Tab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TabsVerStyle } from './pageStyles/TabsVer.style'
import { Col, Row } from 'reactstrap'
import TabCollaps from 'app/components/TabCollaps'
import { tabsData } from './tabsJosn'

import { requestPayload } from 'utils/requestPayload'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { isEmpty } from 'lodash'
import { FormBuilder } from 'app/Plugins/FormBuilder'
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function Tabs_Feature() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const [isSuccess] = useState('')
  const { mutate: candidateOtr } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/user/candidate/otr'),
  })
  useEffect(() => {
    const payload = {
      formId: 'otr_form',
      action: 'schema',
    }

    candidateOtr({ ...payload } as any)
  }, [])

  const handleOnFormChange = useCallback(() => {}, [])

  return (
    <Suspense fallback={<OverlayLoader open className="" />}>
      <div>
        <Row>
          <Col sm={2} style={{ background: 'var(--bs-dark)', height: '100vh' }}>
            Menus
          </Col>
          <Col className="ps-0">
            <Grid container>
              <Grid item xs={3}>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    display: 'flex',
                    height: '100vh',
                  }}
                >
                  <TabsVerStyle
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                  >
                    {tabsData.map((items, index) => {
                      const { name, status } = items
                      const handleValue = status === 1 && true
                      return (
                        <Tab
                          className={`${handleValue && 'form_done'}`}
                          label={name}
                          {...a11yProps(index)}
                        />
                      )
                    })}
                  </TabsVerStyle>
                </Box>
              </Grid>
              <Grid item xs={9} className="p-0">
                {tabsData.map((items, index) => {
                  const {
                    title,
                    message,
                    warning,
                    note,
                    message_status,
                    warning_status,
                    note_status,
                    instruction_status,
                  } = items
                  const handleValue = instruction_status === 1 && true
                  const data = () => {
                    return (
                      <>
                        {message_status === 1 && (
                          <Box>
                            <Typography
                              component="h2"
                              className="p-0 ps-3 pe-3 alert alert-primary rounded-0"
                            >
                              Message
                            </Typography>
                            <div
                              className="text-primary intructionTxt p-2"
                              dangerouslySetInnerHTML={{ __html: message }}
                            />
                          </Box>
                        )}
                        {warning_status === 1 && (
                          <Box>
                            <Typography
                              component="h2"
                              className="p-0 ps-3 pe-3 alert alert-danger rounded-0"
                            >
                              Warning
                            </Typography>
                            <div
                              className="text-danger intructionTxt p-2"
                              dangerouslySetInnerHTML={{ __html: warning }}
                            />
                          </Box>
                        )}
                        {note_status === 1 && (
                          <Box>
                            <Typography
                              component="h2"
                              className="p-0 ps-3 pe-3 alert alert-secondary rounded-0"
                            >
                              Note
                            </Typography>
                            <div
                              className="text-dark intructionTxt p-2"
                              dangerouslySetInnerHTML={{ __html: note }}
                            />
                          </Box>
                        )}
                      </>
                    )
                  }
                  return (
                    <TabPanel value={value} index={index}>
                      <Typography
                        component="h2"
                        className="tabpanelHeading p-3"
                      >
                        {title}
                      </Typography>
                      <TabCollaps
                        title="Instruction"
                        opentab={handleValue}
                        tabhandle={true}
                        padding={false}
                        data={data()}
                      />
                      <Box>
                        {!isEmpty(isSuccess) ? (
                          <CardTitle
                            style={{
                              textAlign: 'center',
                              textTransform: 'capitalize',
                            }}
                          >
                            {isSuccess}
                          </CardTitle>
                        ) : (
                          <FormProvider {...methods}>
                            <FormBuilder
                              filterId=""
                              formId="otr_form"
                              list={false}
                              showForm={true}
                              methods={methods}
                              isPublicForm
                              showSection
                              schemaData={data?.[0]}
                              onFormChange={handleOnFormChange}
                            />
                          </FormProvider>
                        )}
                      </Box>
                    </TabPanel>
                  )
                })}
              </Grid>
            </Grid>
          </Col>
        </Row>
      </div>
    </Suspense>
  )
}
