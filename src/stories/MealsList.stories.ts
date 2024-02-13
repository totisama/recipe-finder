import type { Meta, StoryObj } from '@storybook/react'
import { MealsList } from './MealsList'
import { MOCK_MEALS } from '../const'

const meta = {
  title: 'Example/MealsList',
  component: MealsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MealsList>

export default meta
type Story = StoryObj<typeof meta>

export const Params: Story = {
  args: {
    meals: MOCK_MEALS,
  },
}
