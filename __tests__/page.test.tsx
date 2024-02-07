import HomePage from '@/components/Home.tsx'
import { MOCK_MEALS } from '@/const'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('Renders some Meals', () => {
    render(<HomePage meals={MOCK_MEALS} />)

    const meals = screen.getAllByTestId('meal')

    expect(meals.length).toBeGreaterThan(0)
  })
})
