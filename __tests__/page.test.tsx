import HomePage from '@/components/MealsList'
import { AREAS, MOCK_MEALS } from '@/const'
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

  it('should change the selected value of the option', async () => {
    render(
      <Select
        value='Canadian'
        onChange={() => {}}
        type={'area'}
        options={AREAS}
        text={'Select an area:'}
      />
    )

    const beforeEvent: HTMLOptionElement = screen.getByTestId(
      'select-option-American'
    )
    expect(beforeEvent.selected).toBe(false)

    await act(async () => {
      await userEvent.selectOptions(
        screen.getByRole('combobox'),
        screen.getByTestId('select-option-American')
      )
    })

    const afterEvent: HTMLOptionElement = screen.getByTestId(
      'select-option-American'
    )

    expect(afterEvent.selected).toBe(true)
  })
})
