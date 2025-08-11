import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import '../../../index.scss';


const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    color: 'primary',
    width: '150px',
    children: 'Нажми меня',
    onClick: () => alert('Кнопка нажата!')
  },
};