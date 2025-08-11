import type { Meta, StoryObj } from '@storybook/react';
import { DeveloperCard } from './developerCard';
import '../../../index.scss';

const meta: Meta<typeof DeveloperCard> = {
  title: 'Shared/DeveloperCard',
  component: DeveloperCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof DeveloperCard>;

export const Default: Story = {
  args: {
    photo: 'https://avatars.githubusercontent.com/u/583231?v=4',
    nameDeveloper: 'Иван Иванов',
    jobTitle: 'Frontend Developer',
    description: 'Опытный разработчик с упором на React и TypeScript. Любит чистый код и новые технологии.',
    skills: ['React', 'TypeScript', 'Redux', 'CSS Modules'],
    linkGitHub: 'https://github.com/katrinmark2000',
    linkTg: 'https://t.me/mkkkash',
  },
};