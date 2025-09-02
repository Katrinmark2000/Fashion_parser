import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    layout: "centered", // все истории по центру
    controls: {
      // автоматическое определение контролов
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      // исключаем функции, чтобы не падало
      exclude: /^on[A-Z].*/,
    },
    actions: {
      // все пропсы, начинающиеся с on* будут логироваться в Actions
      argTypesRegex: "^on.*",
    },
  },
};

export default preview;