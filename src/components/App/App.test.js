import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search options', () => {
  render(<App />);
  const searchOption = screen.getByText('Best Match');
  expect(searchOption).toBeInTheDocument();
});
