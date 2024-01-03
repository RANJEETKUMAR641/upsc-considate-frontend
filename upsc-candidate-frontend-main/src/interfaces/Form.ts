export interface FormProps {
  formId: string
  iconsRightCorner?: React.ReactNode
  methods: any
  handleSubmit: (...args) => void
  splitSize?: any[]
  resizebtn?: React.ReactNode
  fullscreen?: React.ReactNode
  isHavingList?: boolean
}
