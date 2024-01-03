import { Fragment } from 'react'
import Logo from 'app/assets/images/gov_Logo.png'
import { Card, CardBody, Col, FormGroup, Label, Row } from 'reactstrap'
import AppHeader from 'theme-library/Layout/AppHeader'
import { Input } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'

import { Typography } from '@mui/material'

import { LoginStyle } from './pageStyles/Login'
import { LABELS } from 'utils/constants'
import { SectionDrawerStyle } from 'app/Plugins/FormBuilder/components/style/SectionDrawer.style'

function ForgotPassword() {
  // const { isLoading, mutate } = useGetLogin()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    // mutate(data)
  }

  return (
    <LoginStyle>
      <div
        className="fixed-header bg-white"
        style={{ height: '60px', position: 'relative' }}
      >
        <AppHeader userLogin={false} />
        <div className="fixed-header">
          <AppHeader userLogin={false} />
        </div>
      </div>
      <Fragment>
        <div className="loginBox">
          <Card className="loginSection">
            <CardBody>
              <div className="loginLogo">
                <div className="logInLogoBox">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="img-fluid mx-auto d-block"
                    aria-hidden="true"
                  />
                </div>
                <div className="loginNameBox">
                  <Typography variant="h1">
                    {LABELS.LOGIN_FORM.HEADING_TEXT}
                    <span>UNION PUBLIC SERVICE COMMISSION</span>
                  </Typography>
                </div>
              </div>
              <div className="divider" />
              <div className="myform">
                <SectionDrawerStyle>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col md={12}>
                        <FormGroup data-testid="myForm">
                          <Label
                            htmlFor="exampleEmail"
                            className="my-label"
                            tabIndex={5}
                          >
                            Email
                          </Label>

                          <Controller
                            name="email"
                            control={control}
                            render={({ field }) => {
                              return (
                                <Input
                                  type="text"
                                  id="email"
                                  data-testid="email"
                                  autoComplete="off"
                                  placeholder="Email here..."
                                  className={'input-sm'}
                                  aria-label="Email"
                                  aria-required="true"
                                  aria-invalid={!!errors.email}
                                  aria-describedby="email-error"
                                  {...field}
                                  tabIndex={6}
                                />
                              )
                            }}
                            rules={{
                              required: true,
                              validate: (v) => v.includes('@'),
                            }}
                            shouldUnregister={false}
                          />

                          {errors.email && (
                            <span
                              role="alert"
                              id="email-error"
                              className="text-danger"
                            >
                              {errors.email.type === 'required'
                                ? 'Email is required'
                                : 'Enter a valid email'}
                            </span>
                          )}
                        </FormGroup>
                      </Col>
                    </Row>

                    <div className="divider" />
                    <div className="">
                      <div className="text-end" tabIndex={9}>
                        <a
                          href="/#"
                          onClick={(e) => e.preventDefault()}
                          className="btn-lg btn btn-link text-info recoverbtn p-0"
                        >
                          Recover Password
                        </a>{' '}
                      </div>
                    </div>
                  </form>
                </SectionDrawerStyle>
              </div>
            </CardBody>
          </Card>
        </div>
      </Fragment>
    </LoginStyle>
  )
}

export default ForgotPassword
