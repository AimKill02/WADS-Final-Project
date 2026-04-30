/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginPage from "@/app/login/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn(), refresh: jest.fn() }),
}));
jest.mock("@/lib/firebase", () => ({ auth: {} }));
jest.mock("firebase/auth", () => ({
  signInWithPopup: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));
jest.mock("@/lib/auth-client", () => ({
  authClient: { signIn: { email: jest.fn() } },
}));

describe("LoginPage", () => {
  it("renders accessible email and password fields", () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("autocomplete", "email");
    expect(emailInput).toBeRequired();

    expect(passwordInput).toHaveAttribute("type", "password");
    expect(passwordInput).toHaveAttribute("autocomplete", "current-password");
    expect(passwordInput).toBeRequired();
  });

  it("uses explicit button types for login actions", () => {
    render(<LoginPage />);

    expect(screen.getByRole("button", { name: /continue with google/i })).toHaveAttribute(
      "type",
      "button"
    );
    expect(screen.getByRole("button", { name: /login with email/i })).toHaveAttribute(
      "type",
      "submit"
    );
  });

  it("renders link to register", () => {
    render(<LoginPage />);
    const link = screen.getByRole("link", { name: /sign up/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/register");
  });
});
