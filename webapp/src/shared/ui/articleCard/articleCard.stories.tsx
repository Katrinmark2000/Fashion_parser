import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from '../articleCard/articleCard';
import '../../../index.scss';

const wrapperStyle = {
  width: 320,
  maxHeight: 480,
  padding: 10,
};

const meta: Meta<typeof ArticleCard> = {
  title: 'Shared/ArticleCard',
  component: ArticleCard,
  decorators: [
    (Story) => (
      <div style={wrapperStyle}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    articleImage:
      'https://n1s1.hsmedia.ru/2f/44/eb/2f44ebef815d2613e278cc9e327eb0de/640x479_0xac120003_5133665071665820117.jpeg',
    articleTitle: 'Павел Табаков и Софья Синицына воссоединились ради 5-летия дочери',
    articleDescription:
      'Мия появилась на свет уже после того, как родители расстались. Однако актерам удалось сохранить теплые отношения ради дочки.',
    articleLink:
      'https://www.woman.ru/stars/pavel-tabakov-i-sofya-sinicyna-vossoedinilis-radi-5-letiya-docheri-id6487728/',
    articlePublicationTime: '06.08.2025',
  },
};

export const BrokenImage: Story = {
  args: {
    ...Default.args,
    articleImage: "https://broke",
  },
};