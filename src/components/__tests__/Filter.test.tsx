import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Filter from '../Filter/Filter'

describe('Filter Component', () => {
  it('calls onSort function when FilterButton is clicked', () => {
    // Arrange
    const mockOnSort = jest.fn() // Mock onSort function

    // Act
    const { getByTestId } = render(<Filter onSort={mockOnSort} />)
    const filterButton = getByTestId('filter-button') // Find the FilterButton element by its data-testid attribute
    fireEvent.click(filterButton) // Simulate a click event on the FilterButton

    // Assert
    expect(mockOnSort).toHaveBeenCalled() // Check if the onSort function was called
  })
})
