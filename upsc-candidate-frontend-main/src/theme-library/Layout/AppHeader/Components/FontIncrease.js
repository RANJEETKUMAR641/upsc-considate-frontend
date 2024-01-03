import TextIncreaseIcon from '@mui/icons-material/TextIncrease'
import TextDecreaseIcon from '@mui/icons-material/TextDecrease'
import TextFormatIcon from '@mui/icons-material/TextFormat'
import { Button } from 'reactstrap'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useCallback, useEffect, useState } from 'react'

export const FontIncrease = () => {
  const [inc, setInc] = useState(16)

  const increase = useCallback(() => {
    if (inc < 20) {
      setInc((prevInc) => {
        const newInc = prevInc + 1
        document.getElementsByTagName('html')[0].style.fontSize = newInc + 'px'
        return newInc
      })
    }
  }, [inc])

  const decrease = useCallback(() => {
    if (inc > 12) {
      setInc((prevInc) => {
        const newInc = prevInc - 1
        document.getElementsByTagName('html')[0].style.fontSize = newInc + 'px'
        return newInc
      })
    }
  }, [inc])

  const auto = useCallback(() => {
    setInc(16)
    document.getElementsByTagName('html')[0].style.fontSize = '16px'
  }, [inc])

  return (
    <>
      <ButtonGroup
        size="small"
        color="primary"
        aria-label="small button group"
        className="me-3"
      >
        <Button onClick={() => decrease()} className="text-warning bg-color">
          <TextDecreaseIcon fontSize="small" />
        </Button>
        <Button onClick={() => auto()} className="text-warning bg-color">
          <TextFormatIcon fontSize="small" />
        </Button>
        <Button onClick={() => increase()} className="text-warning bg-color">
          <TextIncreaseIcon fontSize="small" />
        </Button>
      </ButtonGroup>

      {/* <Fontsize count={inc} /> */}
    </>
  )
}

export const Fontsize = (props) => {
  return props.count
}
