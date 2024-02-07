import HomePage from '@/components/Home.tsx'
import { MOCK_MEALS } from '@/const'
import { render, screen } from '@testing-library/react'
import Select from '@/components/Select'
import { userEvent } from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

describe('Page', () => {
  it('Renders some Meals', () => {
    render(<HomePage meals={MOCK_MEALS} />)

    const meals = screen.getAllByTestId('meal')

    expect(meals.length).toBeGreaterThan(0)
  })

  it('should change the value of the select option', async () => {
    render(<Select />)

    await act(() =>
      userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByTestId('select-option-American')
      )
    )

    const option: HTMLOptionElement = screen.getByTestId(
      'select-option-American'
    )

    expect(option.selected).toBe(true)
  })
})
