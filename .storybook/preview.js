import GlobalStyle from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
