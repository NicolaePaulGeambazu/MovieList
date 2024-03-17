import React from 'react'
import { FilterProps } from '../../types'
import { FilterButon } from './Filter.style'

const Filter = ({ onSort }: FilterProps) => {
  return <FilterButon data-testid='filter-button' onClick={onSort} />
}

export default Filter
