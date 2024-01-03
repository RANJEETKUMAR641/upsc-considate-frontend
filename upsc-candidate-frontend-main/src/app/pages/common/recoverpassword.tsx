import { Fragment } from 'react'
import Logo from 'app/assets/images/gov_Logo_white.png'
import { Col, FormGroup, Label, Row } from 'reactstrap'
import { Input } from 'reactstrap'
import { Controller, useForm } from 'react-hook-form'
import { CircularProgress, Typography } from '@mui/material'
import LoginOutlined from '@mui/icons-material/LoginOutlined'
import { LABELS } from 'utils/constants'
import { LoginNewStyle } from './pageStyles/LoginNew'

function RecoverPassword() {
  // const { isLoading, mutate } = useGetLogin()

  const isLoading = false

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    // mutate(data)
  }

  return (
    <LoginNewStyle>
      <Fragment>
        <div className="loginContainer">
          <div className="loginLogo">
            <div className="logInLogoBox">
              <img
                src={Logo}
                alt="Logo"
                className="img-fluid mx-auto d-block loginLogoImg"
                aria-hidden="true"
              />
            </div>
            <div className="loginHeading">
              <Typography variant="h1">
                {LABELS.LOGIN_FORM.HEADING_TEXT}
                <br />
                <span>UNION PUBLIC SERVICE COMMISSION</span>
              </Typography>
            </div>
          </div>
          <div className="loginBox">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label
                      htmlFor="examplePassword"
                      className="my-label"
                      tabIndex={7}
                    >
                      Password
                    </Label>

                    <Controller
                      name="password"
                      control={control}
                      render={({ field }) => {
                        return (
                          <Input
                            type="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Password here..."
                            className={'input-sm'}
                            aria-label="Password"
                            aria-required="true"
                            aria-invalid={!!errors.password}
                            aria-describedby="password-error"
                            {...field}
                            tabIndex={7}
                          />
                        )
                      }}
                      rules={{ required: true, minLength: 8 }}
                      shouldUnregister={false}
                    />

                    {errors.password && (
                      <span
                        role="alert"
                        id="password-error"
                        className="text-danger"
                      >
                        {errors.password.type === 'required'
                          ? 'Password is required'
                          : 'Password should be at least 8 characters long'}
                      </span>
                    )}
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Label
                      htmlFor="examplePassword"
                      className="my-label"
                      tabIndex={7}
                    >
                      Confirm Password
                    </Label>

                    <Controller
                      name="confirmpassword"
                      control={control}
                      render={({ field }) => {
                        return (
                          <Input
                            type="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Confirm Password here..."
                            className={'input-sm'}
                            aria-label="Password"
                            aria-required="true"
                            aria-invalid={!!errors.password}
                            aria-describedby="password-error"
                            {...field}
                            tabIndex={7}
                          />
                        )
                      }}
                      rules={{ required: true, minLength: 8 }}
                      shouldUnregister={false}
                    />

                    {errors.password && (
                      <span
                        role="alert"
                        id="password-error"
                        className="text-danger"
                      >
                        {errors.password.type === 'required'
                          ? 'Password is required'
                          : 'Password should be at least 8 characters long'}
                      </span>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <div className="pb-4">
                <button
                  type="submit"
                  className="btn btn-warning p-0 ps-3 pe-3 input-sm"
                  style={{ float: 'right' }}
                  tabIndex={8}
                >
                  {isLoading ? (
                    <CircularProgress
                      color="inherit"
                      size={16}
                      aria-hidden="true"
                    />
                  ) : (
                    <LoginOutlined
                      fontSize="small"
                      className="me-2"
                      style={{ marginTop: '-2px' }}
                    />
                  )}
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    </LoginNewStyle>
  )
}

export default RecoverPassword
