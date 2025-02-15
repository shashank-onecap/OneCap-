import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import PendingActions from "../components/pending-actions";

// Mock the child components
jest.mock("../components/text1", () => {
  return function MockText1(props: any) {
    return <div data-testid="mock-text1">{props.statNames}</div>;
  };
});

jest.mock("../components/icon-set", () => {
  return function MockIconSet() {
    return <div data-testid="mock-icon-set" />;
  };
});

jest.mock("../components/strip", () => {
  return function MockStrip() {
    return <div data-testid="mock-strip" />;
  };
});

describe("PendingActions Component", () => {
  it("renders the component title", () => {
    render(<PendingActions />);
    expect(screen.getByText("Pending Actions")).toBeInTheDocument();
  });

  it("renders all mock actions", () => {
    render(<PendingActions />);
    const actions = [
      "You have a bug that needs to be fixed.",
      "Released a new version",
      "Submitted a bug",
      "Modified A data in Page",
      "Deleted a page in Project",
    ];

    actions.forEach((action) => {
      expect(screen.getByText(action)).toBeInTheDocument();
    });
  });

  it("renders timestamps for each action", () => {
    render(<PendingActions />);
    const timestamps = [
      "Just now",
      "59 minutes ago",
      "12 hours ago",
      "Today, 11:59 AM",
      "Feb 2, 2023",
    ];

    timestamps.forEach((timestamp) => {
      expect(screen.getByText(timestamp)).toBeInTheDocument();
    });
  });

  it("renders icon sets for each action", () => {
    render(<PendingActions />);
    const iconSets = screen.getAllByTestId("mock-icon-set");
    expect(iconSets).toHaveLength(5); // Should match the number of mock actions
  });

  it("applies custom className when provided", () => {
    const customClass = "custom-class";
    const { container } = render(<PendingActions className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });
}); 