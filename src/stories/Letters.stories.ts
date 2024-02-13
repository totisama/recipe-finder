import type { Meta, StoryObj } from '@storybook/react'
import { Letters } from './Letters'

const meta = {
  title: 'Example/Letters',
  component: Letters,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Letters>

export default meta
type Story = StoryObj<typeof meta>

export const Params: Story = {
  args: {
    changeLetter: () => {},
  },
}
