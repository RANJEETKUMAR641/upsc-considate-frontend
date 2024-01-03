import { Fragment } from 'react'
import { Card } from 'reactstrap'

import { useForm } from 'react-hook-form'
import { LoginStyle } from './pageStyles/Login'
import { requestPayload } from 'utils/requestPayload'
import { useMutation } from '@tanstack/react-query'

function Login() {
  const { register, handleSubmit } = useForm({ mode: 'onBlur' })

  const { mutate } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/upload-file'),
  })
  const onSubmit = (data) => {
    const payload = {
      ...data,
      formId: 'post',
      action: 'upsert',
      file: data?.picture?.[0],
      data: { name: 'demo' },
      initData: { name: 'demo' },
    }

    mutate({ ...payload } as any)
  }

  return (
    <LoginStyle>
      <Fragment>
        <div className="loginBox">
          <Card className="loginSection">
            <form>
              <input
                {...register('firstName', { required: true })}
                placeholder="First name"
                className="form-control mb-3"
              />
              <input
                {...register('lastName', { required: true })}
                placeholder="Last name"
                className="form-control mb-3"
              />
              <input
                {...register('picture', { required: true })}
                className="form-control mb-3"
                type="file"
              />

              <button type="button" onClick={handleSubmit(onSubmit)}>
                Submit
              </button>
            </form>
          </Card>
        </div>
      </Fragment>
    </LoginStyle>
  )
}

export default Login
