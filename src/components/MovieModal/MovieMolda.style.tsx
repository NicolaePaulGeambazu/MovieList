import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import { MoviesContainerProps } from '../../types'

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  margin: auto;
  position: relative;
  z-index: 1000;
`

export const Image = styled.img<MoviesContainerProps>`
  width: ${props => (props.devicetype === 'mobile' ? '100%' : '30%')};
  margin-top: ${props => (props.devicetype === 'mobile' ? '20px' : '0')};
`

export const ContentContainer = styled.div<MoviesContainerProps>`
  display: flex;
  gap: 20px;
  flex-direction: ${props =>
    props.devicetype === 'mobile' ? 'column' : 'row'};
`

export const CloseButton = styled(IoMdClose)`
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
