import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders country', async () => {
  const { findByText } = await render(<App />);
  findByText(/United States/i);
});

test('renders country', () => {
  const { findByText } = render(<App />);
  findByText(/France/i);
});

