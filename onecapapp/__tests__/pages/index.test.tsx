import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

// Mock useRouter
import { useRouter } from "next/router";
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: jest.fn(),
      pathname: "/",
    }));
  });

  it("renders the main layout", () => {
    render(<Home />);

    // Check for main components based on your layout
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("redirects to dashboard if needed", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push: pushMock,
    }));

    render(<Home />);

    // Add assertions based on your redirect logic
    // For example, if you have automatic redirect to dashboard:
    // expect(pushMock).toHaveBeenCalledWith("/dashboard");
  });
});
