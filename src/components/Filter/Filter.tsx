import { FilterProps } from '../../types'
import { FilterButon } from './Filter.style'

const Filter = ({ onSort }: FilterProps) => {
  return <FilterButon onClick={onSort} />
}

export default Filter
