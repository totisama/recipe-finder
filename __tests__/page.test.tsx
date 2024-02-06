import Home from '@/components/Home.tsx'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('Renders some Meals', () => {
    render(<Home />)

    const meals = screen.getAllByTestId('meal')

    expect(meals.length).toBeGreaterThan(0)
  })
})
