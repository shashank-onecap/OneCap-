import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";

// Mock the next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("Sidebar Component", () => {
  // Mock router for each test
  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/",
    }));
  });

  it("renders the logo", () => {
    render(<Sidebar />);
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<Sidebar />);
    const navigationItems = [
      "Dashboard",
      "Account Receivable",
      "Payments",
      "Rewards",
      "User Management",
    ];

    navigationItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders user profile section", () => {
    render(<Sidebar />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByAltText("User Avatar")).toBeInTheDocument();
  });

  it("applies correct styles for active route", () => {
    // Mock router with dashboard as active route
    (useRouter as jest.Mock).mockImplementation(() => ({
      pathname: "/dashboard",
    }));

    render(<Sidebar />);
    const dashboardLink = screen.getByText("Dashboard").closest("div");
    expect(dashboardLink).toHaveClass("bg-[#1C1C1C0D]");
  });
});
