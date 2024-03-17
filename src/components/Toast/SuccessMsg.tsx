import React, { useEffect, useState } from 'react'
import { CloseButton, ToastContainer, ToastMessage } from './SuccessMsg.style'
import { SuccessMsgProps } from '../../types'

const SuccessMsg = ({ success, message, onClose }: SuccessMsgProps) => {
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onClose()
    }, 2500)

    return () => clearTimeout(timer)
  })

  return visible ? (
    <ToastContainer $success={success}>
      <ToastMessage>{message}</ToastMessage>
      <CloseButton onClick={onClose} />
    </ToastContainer>
  ) : null
}

export default SuccessMsg
