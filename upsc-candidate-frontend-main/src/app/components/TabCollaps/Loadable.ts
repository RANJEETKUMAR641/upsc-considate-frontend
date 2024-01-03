/** * * Asynchronously loads the component for
TabCollaps
* */ import { lazyLoad } from 'utils/loadable'
export const TabCollaps = lazyLoad(
  () => import('./index'),
  (module) => module.default,
)
