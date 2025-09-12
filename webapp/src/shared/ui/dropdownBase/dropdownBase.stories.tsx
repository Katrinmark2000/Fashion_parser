import type { Meta, StoryObj } from '@storybook/react';
import { DropdownBaseUI } from './dropdownBase';

const meta: Meta<typeof DropdownBaseUI> = {
  title: 'Shared/DropdownBaseUI',
  component: DropdownBaseUI,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof DropdownBaseUI>;

