import { memo, useState, useEffect, useCallback, Fragment } from 'react'
import { get, map, find, isEqual, toString } from 'lodash'

import { useForm, FormProvider } from 'react-hook-form'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'

import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
// import Typography from '@mui/material/Typography'
import { TabH } from './style/tabsH.style'
import { TabV } from './style/tabsV.style'
import { UncontrolledTooltip } from 'reactstrap'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useDispatch, useSelector } from 'react-redux'
import { selectInitData } from 'app/Plugins/FormBuilder/selectors'
import { useFormBuilderSlice } from 'app/Plugins/FormBuilder/slice'
import TabsHorizontal from 'app/components/Tabs/Horizontal'
import TabsVertical from 'app/components/Tabs/Vertical'
import { useAxios, axiosAction } from 'app/Plugins/Mutations/useAxios'
import IfcForm from './compoent/Ifc_form'

interface Props {}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const ifc_preview = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const dispatch = useDispatch()
  const getInitData = useSelector(selectInitData)

  const { actions } = useFormBuilderSlice()

  const [check, setCheck] = useState('switch-on')
  const [uniqForms, setUniqForms] = useState<any>([])

  const [selectedForms, setSelectedForms] = useState<any>([])

  const [value, setValue] = useState('1')

  const { mutate: filterMutate, res: modulesRes } = useAxios({
    action: axiosAction.SCHEMA,
    url: '/api/service',
  })

  const [, setTabsAlign] = useState('horizontal')
  const [, setColumn] = useState(12)
  const [tabValue, setTabValue] = useState('')

  const moduleTabs = modulesRes as any

  const { mutate } = useMutation({
    mutationFn: (payload) =>
      requestPayload(payload, '/api/formio', {
        'Content-Type': 'application/json',
      }),
    onSuccess(data: any) {
      setUniqForms(data)
    },
  })

  const tabHandle = () => {
    if (check === 'switch-on') {
      setCheck('switch-off')
      setTabsAlign('horizontal')
      setColumn(3)
    } else {
      setCheck('switch-on')
      setTabsAlign('vertical')
      setColumn(12)
    }
  }

  const handleOnFormChange = (
    event: React.SyntheticEvent,
    newValue: string,
  ) => {
    setTabValue(newValue)
    const selectedFormData = find(
      moduleTabs,
      ({ module_id }: any) => toString(module_id) === toString(newValue),
    ) as any

    const initData = {
      post_id: getInitData.post_id,
      module_id: newValue,
      module_type: selectedFormData?.module_type,
    }

    dispatch(actions.setInitData(initData))

    setUniqForms([])

    setValue(newValue)
    setSelectedForms(selectedFormData?.forms?.split(','))
  }

  useEffect(() => {
    if (selectedForms) {
      const payload = {
        action: 'schema',
        formId: selectedForms,
      }

      mutate({ ...payload } as any)
    }
  }, [selectedForms])

  const formsId = [] as any

  for (const [, value] of Object.entries(uniqForms)) {
    formsId.push(value)
  }

  const beforeSubmitCB = useCallback((args) => {
    if (get(args, 'module_type')) {
      const finalPayload = {
        data: {
          action: 'getIFCFilter',
          path: 'formio',
          section: 'ora/ifc',
          module_type: get(args, 'module_type'),
          post_id: get(args, 'post_id'),
          initData: {},
        },
        isCustomPayload: true,
      }

      filterMutate({ ...finalPayload } as any)
    }

    return { rc: false, data: [] }
  }, [])

  const successCB = (args) => {
    if (args) {
    }
  }

  const renderData = useCallback(() => {
    const schemas = formsId.reduce((acc, fields) => {
      return {
        ...acc,
        [fields?.formid]: fields,
      }
    }, {})

    return (
      <TabPanel value={value?.toString()} sx={{ padding: '0' }}>
        {map(formsId, (form) => (
          <IfcForm form={form} schemas={schemas} key={form.formid} />
        ))}
      </TabPanel>
    )
  }, [formsId])

  return (
    <>
      <FormProvider {...methods}>
        <FormBuilder
          filterId="pm_filter_soap"
          formId=""
          list={false}
          showForm={false}
          methods={methods}
          successCB={successCB}
          beforeSubmitCB={beforeSubmitCB}
          iconsRightCorner={
            moduleTabs?.length > 0 && (
              <i>
                <button
                  className="btn btn-transparent p-0"
                  data-on-label="ON"
                  data-off-label="OFF"
                  tabIndex={0}
                  onClick={() => tabHandle()}
                  id="tabAlignBox"
                >
                  <div className={`switch-animate + ${check}`}>
                    <input type="checkbox" hidden />
                    {check === 'switch-off' ? (
                      <i
                        className="fa fa-bars"
                        style={{ transform: 'rotate(90deg)' }}
                      />
                    ) : (
                      <i className="fa fa-bars" />
                    )}
                  </div>
                </button>
                <UncontrolledTooltip placement="bottom" target={'tabAlignBox'}>
                  Tab Layout Align
                </UncontrolledTooltip>
              </i>
            )
          }
        />
      </FormProvider>
      {check === 'switch-off' ? (
        <TabsHorizontal>
          <TabH
            value={tabValue}
            onChange={handleOnFormChange}
            aria-label="lab API tabs example"
            sx={{
              minHeight: 30,
            }}
            variant="fullWidth"
          >
            {map(moduleTabs, ({ module_id, name, icon, module_type }) => (
              <Tab
                key={module_id + module_type}
                icon={<i className={`${icon} me-3`} />}
                iconPosition="start"
                label={`${name} ${
                  isEqual(module_type, 2) ? '(Desirable)' : ''
                }`}
                value={toString(module_id)}
                sx={{
                  maxHeight: 30,
                  minHeight: 30,
                  padding: 0,
                  border: '0.1px solid #dee2e6',
                  textTransform: 'capitalize',
                  position: 'relative',
                  zIndex: 1,
                  color: '#000',
                }}
              />
            ))}
          </TabH>
          <TabContext value={value}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
              }}
            >
              {renderData()}
            </Box>
          </TabContext>
        </TabsHorizontal>
      ) : (
        <TabsVertical>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: 'background.paper',
              display: 'flex',
            }}
          >
            <TabV
              value={tabValue}
              orientation="vertical"
              variant="scrollable"
              onChange={handleOnFormChange}
              aria-label="lab API tabs example"
              //sx={{ borderBottom: 1, borderColor: 'divider' }}
              sx={{ borderRight: 0.1, borderTop: 0.1, borderColor: '#dee2e6' }}
            >
              {map(moduleTabs, ({ module_id, name, icon, module_type }) => (
                <Tab
                  key={module_id + module_type}
                  icon={<i className={`${icon} me-3`} />}
                  iconPosition="start"
                  label={`${name} ${
                    isEqual(module_type, 2) ? '(Desirable)' : ''
                  }`}
                  value={toString(module_id)}
                  sx={{
                    minHeight: 10,
                    textAlign: 'left',
                    borderBottom: '0.1px solid #dee2e6',
                    display: 'block',
                    textTransform: 'capitalize',
                    zIndex: 1,
                    color: '#000',
                  }}
                  className="text-left"
                />
              ))}
            </TabV>
            <TabContext value={value}>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: 'background.paper',
                }}
              >
                {renderData()}
              </Box>
            </TabContext>
          </Box>
        </TabsVertical>
      )}
    </>
  )
})

export default ifc_preview
