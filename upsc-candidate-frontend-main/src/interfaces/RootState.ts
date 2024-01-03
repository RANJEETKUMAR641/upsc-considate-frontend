import { ThemeState } from 'styles/theme/slice/types'

import { SelectStateState } from 'app/Plugins/MyForm/containers/SelectState/types'
import { FormBuilderState } from 'app/Plugins/FormBuilder/types'
import { RootState as RootUserState } from 'app/pages/root/types'
import { OverlayLoaderState } from 'app/components/OverlayLoader/types'

// [IMPORT NEW CONTAINER STATE ABOVE]

/* You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life.
  So, not available always
*/

export interface RootState {
  theme?: ThemeState
  selectState?: SelectStateState
  formBuilder?: FormBuilderState
  root?: RootUserState
  overlayLoader?: OverlayLoaderState

  // [INSERT NEW REDUCER KEY ABOVE]
}
