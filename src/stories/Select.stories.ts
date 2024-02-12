import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { AREAS } from '../const'

const meta = {
  title: 'Example/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Params: Story = {
  args: {
    value: 'American',
    onChange: () => {},
    type: 'area',
    options: AREAS,
    text: 'Area:',
  },
}
