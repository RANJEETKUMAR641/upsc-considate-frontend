/**
 *
 * Modal Box
 *
 */
import React, { memo, useEffect, useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import styled from 'styled-components'

interface Props {
  onFormIdReceived: (close: boolean) => void
  open: boolean
  modalData: any
}

export const ModalBox = memo((props: Props) => {
  const { open, modalData } = props
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
    props.onFormIdReceived(!isModalOpen)
  }
  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      toggleModal()
    }
  }

  useEffect(() => setIsModalOpen(open), [open])

  return (
    <Modal
      className="modal-lg"
      isOpen={isModalOpen}
      toggle={toggleModal}
      onBackdropClick={handleBackdropClick}
    >
      <I className="fa fa-close" onClick={toggleModal} />
      <ModalBody>{modalData}</ModalBody>
    </Modal>
  )
})

const I = styled.i`
  cursor: pointer;
  position: absolute;
  right: 15px;
  z-index: 1;
  top: 15px;
`
