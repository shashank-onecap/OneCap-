import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "../../pages/dashboard";

// Mock the components used in Dashboard
jest.mock("../../components/sidebar", () => {
  return function MockSidebar() {
    return <div data-testid="mock-sidebar" />;
  };
});

jest.mock("../../components/navbar", () => {
  return function MockNavbar() {
    return <div data-testid="mock-navbar" />;
  };
});

jest.mock("../../components/bargraph", () => {
  return function MockBargraph() {
    return <div data-testid="mock-bargraph" />;
  };
});

describe("Dashboard Page", () => {
  it("renders all main components", () => {
    render(<Dashboard />);

    expect(screen.getByTestId("mock-sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-bargraph")).toBeInTheDocument();
  });

  it("renders with correct layout structure", () => {
    const { container } = render(<Dashboard />);

    // Check for main layout wrapper
    expect(container.firstChild).toHaveClass("flex");

    // Check for content area
    const mainContent = screen.getByRole("main");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveClass("flex-1");
  });
});
