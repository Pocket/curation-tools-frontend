import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('The LoginForm component', () => {
  let email: any;
  let password: any;

  beforeEach(() => {
    render(<LoginForm />);
    email = screen.getByLabelText(/your email/i) as HTMLInputElement;
    password = screen.getByLabelText(/password/i) as HTMLInputElement;
  });

  it('renders successfully', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it('updates form fields on change', () => {
    const testEmail = 'john.citizen@test.com';
    const testPassword = 'kittens';

    userEvent.clear(email);
    userEvent.type(email, testEmail);
    expect(email).toHaveValue(testEmail);

    userEvent.clear(password);
    userEvent.type(password, testPassword);
    expect(password).toHaveValue(testPassword);
  });
});
