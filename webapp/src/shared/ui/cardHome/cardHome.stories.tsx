import type { Meta, StoryObj } from '@storybook/react';
import { CardHome } from './cardHome';
import { CiAlarmOn } from 'react-icons/ci';
import '../../../index.scss';


const meta: Meta<typeof CardHome> = {
  title: 'Shared/CardHome',
  component: CardHome,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardHome>;

export const Default: Story = {
  args: {
    title: 'Будильник',
    text: 'Просто какой-то текст. Иконка будильника первая попала под руку)',
    icon: <CiAlarmOn size={40} color="#9d174d" />,
  },
};