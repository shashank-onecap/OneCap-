import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Strip from "../components/strip";

describe("Strip Component", () => {
  it("renders with default props", () => {
    const { container } = render(<Strip />);
    const stripElement = container.firstChild;
    expect(stripElement).toBeInTheDocument();
  });

  it("applies custom styles from props", () => {
    const { container } = render(
      <Strip
        stripMargin="10px"
        stripPosition="relative"
        stripTop="20px"
        stripLeft="30px"
      />
    );
    const stripElement = container.firstChild as HTMLElement;
    expect(stripElement).toHaveStyle({
      margin: "10px",
      position: "relative",
      top: "20px",
      left: "30px",
    });
  });

  it("renders with custom direction and number", () => {
    const { container } = render(
      <Strip direction="Horizontal" number={2} />
    );
    const stripElement = container.firstChild;
    expect(stripElement).toHaveAttribute("data-direction", "Horizontal");
    expect(stripElement).toHaveAttribute("data-number", "2");
  });
}); 