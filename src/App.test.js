// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EdenMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EdenMesh/i);
    expect(titleElement).toBeInTheDocument();
});
