/* eslint-disable */

/**
 *
 * SectionDrawer
 *
 */
import React, { Fragment, useCallback, useState } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import MyPopOver from 'app/components/MyPopOver'
import { FormProvider, useForm } from 'react-hook-form'
import { Row, Col, FormFeedback, Label, Button } from 'reactstrap'
import { has, get, toNumber, map, isEmpty, isEqual } from 'lodash'

import Input from '../plugins/MyInput'
import { MyDate } from '../plugins/MyDate'
import MyCaptcha from '../plugins/MyCaptcha'
import MySelect from '../plugins/MySelect'
import { VerifyInput } from '../plugins/MyVerifyInput'
import MySelectTree from '../plugins/MySelectTree'
import { MyTypeHead } from '../plugins/MyTypeHead'
import MyFileInput from '../plugins/MyFileInput'
import MyPasswordCheck from '../plugins/MyPasswordCheck'
import MyTextArea from '../plugins/MyTextArea'
import MyRCTree from '../plugins/MyRCTree'
import MyRCSelectTree from '../plugins/MyRCSelectTree'
import { MyInputList } from '../plugins/MyList'
import { MySelectTreeList } from '../plugins/MySelectTreeList'
import { ModalBox } from 'app/components/ModalBox/Index'
import { SelectState } from 'app/Plugins/MyForm/containers/SelectState'
import MyMultiFileInput from '../plugins/MyMultiFileInput'
import { MyWebcam } from '../plugins/MyWebcam'
import { SectionDrawerStyle } from './style/SectionDrawer.style'
import { FormBuilder } from '..'
import { useSelector } from 'react-redux'
import { selectForms } from '../selectors'
// import { VerifyPasswordInput } from '../plugins/MyInputPassword'
import MyMaskInput from '../plugins/MyMaskInput'
// import { MySelectTreeList as MySelectTreeListContainer } from 'app/components/MyForm/containers/MySelectTreeList'

const SectionDrawer = ({
  sections,
  values,
  touched,
  handleBlur,
  handleChange,
  notShowTitle = false,
  initData,
  control,
  schema,
  secondaryPaneSize = 0,
  disabled,
  submitProp,
  resetProp,
  formId,
  pluginProps,
  isPublicForm = false,
  formState,
  resValue,
  rowData,
  fmethods,
}: any) => {
  const [modal, setModal] = useState<boolean>(false)
  const [modalFormId, setModalFormId] = useState<string>('')

  const getFormDetails = useSelector(selectForms)

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const {
    formState: { errors },
    setValue,
    getValues,
  } = fmethods || methods

  const formValues = getValues()

  const handleComponent = useCallback(
    (col) => {
      col = Object.assign(col, {
        ...(col?.addttrs && { addattrs: JSON.parse(col?.addttrs) }),
      })

      switch (col?.component) {
        case 'fileinput':
          return (
            <MyFileInput
              {...col}
              errors={errors}
              values={{ ...resValue, ...values }}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'datepicker':
          return (
            <MyDate
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'input':
          return (
            <Input
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'captcha':
          return (
            <MyCaptcha
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )
        case 'input-mask':
          return (
            <MyMaskInput
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'reactselect':
        case 'react-select':
        case 'select':
        case 'async-reactselect':
          return (
            <SelectState
              col={col}
              formValues={formValues}
              initData={pluginProps?.initData}
              schema={schema}
            >
              <MySelect
                {...col}
                errors={errors}
                values={values}
                touched={touched}
                handleChange={handleChange}
                handleBlur={handleBlur}
                initData={initData}
                control={control}
                schema={schema}
                pluginProps={pluginProps}
                fmethods={fmethods}
              />
            </SelectState>
          )
        case 'verify-input':
          return (
            <VerifyInput
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'select-tree':
          return (
            <MySelectTree
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              initData={initData}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'typehead':
          return (
            <MyTypeHead
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              initData={initData}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'checkpassword':
          return (
            <MyPasswordCheck
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'textarea':
          return (
            <MyTextArea
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'tree-list':
          return (
            <MyInputList
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              initData={initData}
              control={control}
              setValue={setValue}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'select-tree-list':
          return (
            <MySelectTreeList
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              initData={initData}
              control={control}
              setValue={setValue}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'rc-tree':
          return (
            <MyRCTree
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              initData={initData}
              control={control}
              setValue={setValue}
              schema={schema}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'rc-select-tree':
          return (
            <MyRCSelectTree
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              initData={initData}
              control={control}
              setValue={setValue}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'fileinput-multiple':
          return (
            <MyMultiFileInput
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )

        case 'webcam':
          return (
            <MyWebcam
              {...col}
              errors={errors}
              values={values}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              control={control}
              pluginProps={pluginProps}
              fmethods={fmethods}
            />
          )
      }

      return <div />
    },
    [values],
  )

  const removeColAndReturnNumber = useCallback(
    (size) => {
      const number = size?.substring(4)
      if (!isEqual(secondaryPaneSize, 0)) {
        if (secondaryPaneSize < 400) {
          return 12
        }
        return toNumber(number)
      }
      return toNumber(number)
    },
    [secondaryPaneSize],
  )

  const renderFormActionButtons = useCallback(() => {
    return (
      <span id="buttons" className="d-flex flex-row justify-content-end">
        {submitProp === 'submit' ? (
          <Button className="mt-0" color="info" type={submitProp}>
            Submit
          </Button>
        ) : (
          <Button className="mt-0 mr-1" color="info" onClick={submitProp}>
            Submit
          </Button>
        )}

        <Button color="light" className="mt-0" onClick={resetProp}>
          Reset
        </Button>
      </span>
    )
  }, [submitProp, getFormDetails, formId])

  const handleTitle = (t1, t2) => {
    if (t1 && t2) {
      return `${t2} / ${t1}`
    }
    return t1
  }

  const handleChangedData = (col) => {
    const originalValue = values?.[col.field]
    const newValue = rowData?.[col.field]

    if (
      !isEmpty(newValue) &&
      pluginProps?.isCustomGet &&
      !isEqual(originalValue, newValue)
    ) {
      return <span>{` Original value: ${originalValue}`}</span>
    }
    return null
  }

  return (
    <React.Fragment>
      <SectionDrawerStyle>
        <Row className="me-0 ms-0">
          {map(sections, (item: any) => {
            const { title, columns, sectionid, hint, classes, colsize } = item

            return (
              <Col className={colsize}>
                <React.Fragment key={sectionid}>
                  <fieldset
                    key={sectionid}
                    id={`my-sectionId-${sectionid}`}
                    className={`${
                      sectionid ? 'my-fieldset' : ''
                    } my-sectionClass-${
                      sectionid === 'NA' ? 'other' : sectionid
                    } ${classes}`}
                    style={{ margin: notShowTitle ? 0 : '' }}
                    disabled={disabled}
                  >
                    <legend>{title}</legend>
                    <Row
                      // className={sectionid || 'me-0 ms-0'}
                      key={`${title}_${sectionid}`}
                    >
                      {columns?.map((col: any) => {
                        const isHavingHelperFormId = has(
                          get(col, 'options'),
                          'helperformid',
                        )
                        return col?.formview !== 0 && col?.active !== 0 ? (
                          <>
                            <Col
                              sm={removeColAndReturnNumber(col?.colsize)}
                              key={`${col?.field}__$${sectionid}___${title}`}
                            >
                              <div
                                id={`my-colId-${col?.field}`}
                                className={`mb-1 my-input-${col?.field} ${col?.classes}`}
                                key={col.title}
                              >
                                {col?.inline === 1 ? (
                                  <>
                                    <div
                                      className="w-100"
                                      style={{ display: 'flex' }}
                                    >
                                      <Label for={col?.title} className="pe-3">
                                        <div
                                          style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                          }}
                                        >
                                          <div>
                                            {col?.title}
                                            {col?.required === 1 ? (
                                              <span className="my-form-hint text-danger">
                                                *
                                              </span>
                                            ) : (
                                              <Fragment />
                                            )}
                                          </div>
                                          <>
                                            {isHavingHelperFormId && (
                                              <Button
                                                type="button"
                                                color="info"
                                                className="mb-2"
                                                onClick={() => {
                                                  setModal(true)
                                                  setModalFormId(
                                                    col?.options?.helperformid,
                                                  )
                                                }}
                                              >
                                                + Add
                                              </Button>
                                            )}

                                            <MyPopOver col={col}>
                                              <InfoOutlinedIcon className="d-info-pop" />
                                            </MyPopOver>
                                          </>
                                        </div>
                                      </Label>
                                      {handleComponent(col)}
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <Label
                                      for={col?.title}
                                      className="my-label w-100"
                                    >
                                      <div
                                        style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          justifyContent: 'space-between',
                                          alignItems: 'center',
                                        }}
                                      >
                                        <div>
                                          {handleTitle(
                                            col?.title,
                                            col?.title_lng,
                                          )}
                                          {col?.required === 1 ? (
                                            <span className="my-form-hint text-danger">
                                              *
                                            </span>
                                          ) : (
                                            <Fragment />
                                          )}
                                        </div>
                                        <>
                                          {isHavingHelperFormId && (
                                            <Button
                                              type="button"
                                              color="info"
                                              className="mb-2"
                                              onClick={() => {
                                                setModal(true)
                                                setModalFormId(
                                                  col?.options?.helperformid,
                                                )
                                              }}
                                            >
                                              + Add
                                            </Button>
                                          )}

                                          <MyPopOver col={col}>
                                            <InfoOutlinedIcon className="d-info-pop" />
                                          </MyPopOver>
                                        </>
                                      </div>
                                    </Label>

                                    {handleComponent(col)}
                                  </>
                                )}

                                <FormFeedback>
                                  {handleChangedData(col)}
                                </FormFeedback>

                                <small>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: col?.hint,
                                    }}
                                    className="hintHeading"
                                  />
                                </small>
                              </div>
                            </Col>
                          </>
                        ) : (
                          <React.Fragment />
                        )
                      })}

                      {!isPublicForm &&
                        ![
                          'candidate_login',
                          'forgotpassword',
                          'admin_login',
                        ].includes(formId as any) &&
                        sections?.length === 1 && (
                          <Col
                            id="buttons"
                            className="d-flex flex-row justify-content-end w-100 mb-2"
                          >
                            <div className="mb-1">
                              <Label
                                style={{
                                  visibility: 'hidden',
                                  display: 'block',
                                }}
                                className="mb-0"
                              >
                                1
                              </Label>
                              {renderFormActionButtons()}
                            </div>
                          </Col>
                        )}
                      <small>
                        <div
                          dangerouslySetInnerHTML={{ __html: hint }}
                          className="hintHeading"
                        />
                      </small>
                    </Row>
                  </fieldset>
                </React.Fragment>
              </Col>
            )
          })}
        </Row>

        {!isPublicForm &&
          !['candidate_login', 'admin_login', 'forgotpassword'].includes(
            formId as any,
          ) &&
          sections?.length > 1 && (
            <span className="d-flex flex-row justify-content-end m-4">
              {renderFormActionButtons()}
            </span>
          )}
      </SectionDrawerStyle>
      <ModalBox
        open={modal}
        onFormIdReceived={() => setModal(false)}
        modalData={
          <div className="mt-5">
            <FormProvider {...methods}>
              <FormBuilder
                filterId=""
                formId={modalFormId}
                list={true}
                showForm={true}
                initData={initData}
                {...methods}
              />
            </FormProvider>
          </div>
        }
      />
    </React.Fragment>
  )
}

export { SectionDrawer }
