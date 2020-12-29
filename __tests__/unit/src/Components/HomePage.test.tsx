import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '@Pages/HomePage';

describe('<HomePage /> component tests', () => {
  it('should render correctly', () => {
    render(<HomePage />);

    expect(screen.getByText('Home page')).toBeInTheDocument();
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
