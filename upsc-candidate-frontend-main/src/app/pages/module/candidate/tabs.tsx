import { Suspense, useEffect, useState, Fragment, lazy } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TabsVerticalStyle } from './style/tabsVertical.style'
import { RiArrowDownSLine } from '@react-icons/all-files/ri/RiArrowDownSLine'
import { RiArrowUpSLine } from '@react-icons/all-files/ri/RiArrowUpSLine'
import TabCollaps from 'app/components/TabCollaps'
import { isEqual } from 'lodash'
import Tabs from 'react-responsive-tabs'
import 'react-responsive-tabs/styles.css'

import { useWindowDimensions } from 'app/Plugins/utils/useWindowDimensions'

import { CandidateApplicationNAForm } from 'app/pages/module/candidate/candidate_applicaton_na_form'

export default function TabsHorizontal({
  modules,
  handleOnBeforeChange,
  handleRefreshClick,
}: any) {
  const [tabsData, setTabData] = useState([] as any[])
  const [instructionShow, setinstructionShow] = useState(false)

  useEffect(() => {
    setTabData(modules)
  }, [modules])

  const datalist = (e) => {
    const module14Data = tabsData.find((item) => item.module_id === e)

    if (module14Data) {
      const {
        message,
        warning,
        note,
        data_status,
        candidate_formid,
        module_id,
        module_type,
      } = module14Data
      const instruction = message !== null || warning !== null
      data_status === null
        ? setinstructionShow(false)
        : setinstructionShow(true)

      const Dynamic = lazy(() =>
        import(`./${candidate_formid}`).catch(() => ({
          default: () => (
            <CandidateApplicationNAForm
              formId={candidate_formid}
              module_id={module_id}
              module_type={module_type}
            />
          ),
        })),
      )

      return (
        <>
          {}
          {instruction && (
            <TabCollaps
              title="Instruction"
              opentab={instructionShow}
              tabhandle={true}
              padding={false}
              data={
                <>
                  {message !== null && (
                    <Box>
                      <Typography
                        component="h2"
                        className="p-0 ps-3 pe-3 alert alert-secondary rounded-0"
                      >
                        Message
                      </Typography>
                      <div
                        className="intructionTxt p-3"
                        dangerouslySetInnerHTML={{ __html: message }}
                      />
                    </Box>
                  )}
                  {warning !== null && (
                    <Box>
                      <Typography
                        component="h2"
                        className="p-0 ps-3 pe-3 alert alert-danger rounded-0"
                      >
                        Warning
                      </Typography>
                      <div
                        className="text-danger intructionTxt p-3"
                        dangerouslySetInnerHTML={{ __html: warning }}
                      />
                    </Box>
                  )}
                  {note !== null && (
                    <Box>
                      <Typography
                        component="h2"
                        className="p-0 ps-3 pe-3 alert alert-warning rounded-0"
                      >
                        Note
                      </Typography>
                      <div
                        className="intructionTxt p-3"
                        dangerouslySetInnerHTML={{ __html: warning }}
                      />
                    </Box>
                  )}
                </>
              }
            />
          )}
          <div className="w-100">
            <Suspense>
              <Dynamic
                name={candidate_formid}
                module_id={module_id}
                module_type={module_type}
              />
            </Suspense>
          </div>
        </>
      )
    }
    return null
  }

  const tabHeading = (tabHead, status, type) => {
    return (
      <>
        <div className="tabHeading">
          {status === 1 ? (
            <i className="fa fa-circle-check pe-3 text-success" />
          ) : (
            <i className="fa fa-circle pe-3 text-danger" />
          )}
          {tabHead}{' '}
          {!isEqual(type, 0) ? (
            <span className="my-form-hint text-danger">*</span>
          ) : (
            <Fragment />
          )}
        </div>
        <div className="tabIcon">
          <RiArrowDownSLine className="downicon" />
          <RiArrowUpSLine className="upicon" />
        </div>
      </>
    )
  }

  function getTabs() {
    return tabsData
      ?.map((president, index) => ({
        title: tabHeading(
          president?.name,
          president?.data_status,
          president?.module_type,
        ),
        getContent: () => datalist(president.module_id),
        /* Optional parameters */
        key: index,
        tabClassName: 'tab verticaltab',
        panelClassName: 'panel verticalPanel',
      }))
      .concat({
        title: 'Update Application Status',
        getContent: () => '',
        key: 100,
        tabClassName: 'tab verticaltab',
        panelClassName: 'panel verticalPanel',
      } as any)
  }

  const [isMobile, setIsMobile] = useState(200)
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (width > 700) {
      setIsMobile(200)
    } else {
      setIsMobile(700)
    }
  }, [width])

  return (
    <TabsVerticalStyle>
      <Tabs
        items={getTabs()}
        showMore={false}
        transformWidth={isMobile}
        beforeChange={({ nextTabKey }) => {
          if (isEqual(nextTabKey, 100)) {
            handleRefreshClick()
          }
          if (!isEqual(nextTabKey, 100)) {
            handleOnBeforeChange()
          }
        }}
      />
    </TabsVerticalStyle>
  )
}
