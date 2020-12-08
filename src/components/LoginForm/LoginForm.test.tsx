import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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

    fireEvent.change(email, {
      target: { value: testEmail },
    });
    fireEvent.change(password, {
      target: { value: testPassword },
    });

    expect(email).toHaveValue(testEmail);
    expect(password).toHaveValue(testPassword);
  });
});
