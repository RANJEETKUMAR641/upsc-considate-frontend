/** * * Asynchronously loads the component for
NoOptionMessage
* */ import { lazyLoad } from 'utils/loadable'
export const NoOptionMessage = lazyLoad(
  () => import('./index'),
  (module) => module.NoOptionMessage,
)
