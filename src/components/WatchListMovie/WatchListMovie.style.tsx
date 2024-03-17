import styled from 'styled-components'
import { IoTrashBinOutline } from 'react-icons/io5'

export const WatchItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  width: 90%;
`

export const ImageWatchList = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`

export const MovieTitle = styled.div`
  font-size: 18px;
  color: #333;
  flex-grow: 1;
`

export const BinButton = styled(IoTrashBinOutline)`
  cursor: pointer;
  font-size: 20px;
  color: #666;
`
