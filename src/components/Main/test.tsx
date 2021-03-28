import React from 'react';
import { render, screen } from '@testing-library/react';

import { Main } from './index';

describe('<Main />', () => {
  it('should render the heading', function () {
    const { container } = render(<Main />);

    const _screen = screen.getByRole('heading', { name: /React Avançado/i });

    expect(_screen).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
