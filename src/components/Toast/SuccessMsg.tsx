import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

interface SuccessMsgProps {
  success: boolean;
  message: string;
  onClose: () => void;
}

const ToastContainer = styled.div<{ success: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => (props.success ? 'green' : 'red')};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const ToastMessage = styled.span`
  margin-right: 10px;
`;

const CloseButton = styled(IoMdClose)`
  cursor: pointer;
`;

const SuccessMsg: React.FC<SuccessMsgProps> = ({ success, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  });

  return visible ? (
    <ToastContainer success={success}>
      <ToastMessage>{message}</ToastMessage>
      <CloseButton onClick={onClose} />
    </ToastContainer>
  ) : null;
};

export default SuccessMsg;
