import { toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const notify = (errorMessage, type) => {
  toast(errorMessage, {
    transition: Flip,
    closeButton: true,
    autoClose: 3000,
    position: 'top-right',
    type: type,
  })
}
