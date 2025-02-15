import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import AccountReceivable from "../../pages/AccountsReceivable";

// Mock the components
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

jest.mock("../../components/accountreceivable/AccountReceivablecontent", () => {
  return function MockAccountReceivableContent() {
    return <div data-testid="mock-ar-content" />;
  };
});

describe("Account Receivable Page", () => {
  it("renders all required components", () => {
    render(<AccountReceivable />);

    expect(screen.getByTestId("mock-sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-ar-content")).toBeInTheDocument();
  });

  it("maintains correct page layout", () => {
    const { container } = render(<AccountReceivable />);

    // Check main wrapper
    expect(container.firstChild).toHaveClass("flex", "h-screen", "bg-gray-100");

    // Check content area
    const mainContent = screen.getByRole("main");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveClass("flex-1");
  });
});
