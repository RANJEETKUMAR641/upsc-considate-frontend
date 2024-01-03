export const config = {
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
  blackListUrl: 'http://13.214.115.241:8002',
}

export const LABELS = {
  LOGIN_FORM: {
    HEADING_TEXT: 'संघ लोक सेवा आयोग',
    HEADING_TEXT_1: 'UNION PUBLIC SERVICE COMMISSION',
  },
  IDLE_TIME: 1200000, // 20 mints idle time
}

export const VALIDATIONS = {
  otr: {
    min_age: 16,
    max_age: 65,
  },
}

export const ELIGIBLE_MODULES = ['Gender', 'Age', 'Vacancy', 'Exam Attempts']
