/* --- STATE --- */

type form = {
  [key: string]: {
    schema: Object
    data: Object
    pKeys: any[]
    pKeyId: string
    columns: any[]
    reqCols: any[]
    hasAddPermission: boolean
    activeSchema: any
  }
}

//todo: need to update names

export interface FormBuilderState {
  initData: Object
  formPayload: Object
  tableData: Object
  forms: form
  listInitData: Object
}
