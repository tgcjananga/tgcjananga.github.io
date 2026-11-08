import { render, screen } from '@testing-library/react';
import App from './App';
import { personalInfo } from './data/portfolioData';

test('renders the portfolio owner name as the main heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: personalInfo.name })
  ).toBeInTheDocument();
});
