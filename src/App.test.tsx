import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  test('renders App component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Click on the Vite and React logos/i);
    expect(linkElement).toBeInTheDocument();
  });
});
