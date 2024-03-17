import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'

export const ToastContainer = styled.div<{ success: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${props => (props.success ? 'green' : 'red')};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const ToastMessage = styled.span`
  margin-right: 10px;
`

export const CloseButton = styled(IoMdClose)`
  cursor: pointer;
`
