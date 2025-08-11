import type { Meta, StoryObj } from '@storybook/react';
import { TagNewSections } from './tag';
import '../../../index.scss';

const meta: Meta<typeof TagNewSections> = {
  title: 'Shared/TagNewSections',
  component: TagNewSections,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof TagNewSections>;

export const Pink: Story = {
  args: {
    color: 'pink',
    children: 'Новое',
  },
};