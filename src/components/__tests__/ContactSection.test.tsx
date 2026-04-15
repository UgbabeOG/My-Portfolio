import { render, screen } from '@testing-library/react';
import { ContactSection } from '@/components/ContactSection';

describe('ContactSection', () => {
  it('renders contact form', () => {
    render(<ContactSection />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<ContactSection />);
    expect(screen.getByText(/feel free to reach out/i)).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
});