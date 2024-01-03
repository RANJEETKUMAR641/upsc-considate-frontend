/** * * Asynchronously loads the component for
MIDataGridComponent
* */ import { lazyLoad } from 'utils/loadable'
export const MIDataGridComponent = lazyLoad(
  () => import('./index'),
  (module) => module.MIDataGridComponent,
)
