import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'

describe('Header', () => {
  it('renders header component correctly', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Header />
      </Router>
    )

    // Check if the header text is rendered
    expect(getByText(/Movies List/i)).toBeInTheDocument()

    // Click on the menu button to open it
    fireEvent.click(getByTestId('menu-button'))

    // Check if the menu items are rendered after clicking on the menu button
    expect(getByText(/Home/i)).toBeInTheDocument()
    expect(getByText(/Watch List/i)).toBeInTheDocument()
  })

  it('navigates to the correct route when menu items are clicked', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>
    )

    // Click on the menu button to open it
    fireEvent.click(getByTestId('menu-button'))

    // Click on the menu item to navigate to the Home page
    fireEvent.click(getByTestId('home-button'))
    expect(window.location.pathname).toBe('/')

    // Click on the menu item to navigate to the Watch List page
    fireEvent.click(getByTestId('watchlist-button'))
    expect(window.location.pathname).toBe('/watchlist')
  })
})
