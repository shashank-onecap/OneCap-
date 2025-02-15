import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Text1 from "../components/text1";

describe("Text1 Component", () => {
  const defaultProps = {
    direction: "Vertical",
    number: 1,
    textAlignSelf: "stretch",
    textPadding: "8px",
    textHeight: "unset",
    textWidth: "unset",
    textFlex: "unset",
  };

  it("renders with stat names when provided", () => {
    render(
      <Text1 {...defaultProps} statNames="Test Stats" showStatNames={true} />
    );
    expect(screen.getByText("Test Stats")).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    const { container } = render(
      <Text1 {...defaultProps} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders with correct data attributes", () => {
    const { container } = render(
      <Text1 {...defaultProps} direction="Horizontal" number={2} />
    );
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveAttribute("data-direction", "Horizontal");
    expect(element).toHaveAttribute("data-number", "2");
  });

  it("does not render stat names when showStatNames is false", () => {
    const { container } = render(
      <Text1 {...defaultProps} statNames="Test Stats" showStatNames={false} />
    );
    expect(screen.queryByText("Test Stats")).not.toBeInTheDocument();
  });
});
