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

export const Default: Story = {
  args: {
    placeholder: 'Select option',
    options: [
      { value: 'newest', text: 'Newest' },
      { value: 'oldest', text: 'Oldest' },
    ],
    defaultValue: undefined, // ничего не выбрано, показывается placeholder
  },
};

export const WithFirstSelected: Story = {
  args: {
    placeholder: 'Select option',
    options: [
      { value: 'newest', text: 'Newest' },
      { value: 'oldest', text: 'Oldest' },
    ],
    defaultValue: "first", // сразу выбирается первый элемент
  },
};

export const WithCustomDefault: Story = {
  args: {
    placeholder: 'Select option',
    options: [
      { value: 'newest', text: 'Newest' },
      { value: 'oldest', text: 'Oldest' },
    ],
    defaultValue: "oldest", // выбирается конкретный элемент
  },
};
