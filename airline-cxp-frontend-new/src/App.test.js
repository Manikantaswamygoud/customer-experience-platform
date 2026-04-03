import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './app';

test('renders navbar links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Airline CXP')).toBeInTheDocument();
  expect(screen.getByText('Search')).toBeInTheDocument();
});
