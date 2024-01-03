import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}
// function getFilterDimensions() {
//   const compnentsHeight = document.getElementById('filterComponent').current.clientHeight;
//   return {
//     compnentsHeight,
//   }
// }

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
