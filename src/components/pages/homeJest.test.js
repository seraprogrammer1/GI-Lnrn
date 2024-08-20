import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("renders home page", () => {
  it("renders home page image", () => {
    render(<Home />);
    const homeImage = screen.getByAltText("home-image");
    expect(homeImage).toBeVisible();
    expect(homeImage).toBeInTheDocument();
  });

  it("test button", () => {
    render(<Home />);
    const button = screen.getByText("Begin journey");
    expect(button).toBeVisible();
    expect(button).toBeInTheDocument();
  });

  it("test heading tag", () => {
    render(<Home />);
    const { container } = render(<Home />);
    const headingTag = container.querySelectorAll(".heading-tag");
    expect(headingTag).toHaveLength(3);
    expect(headingTag[0]).toHaveTextContent("Personalized Quizzes");
    expect(headingTag[1]).toHaveTextContent("Rewarding");
    expect(headingTag[2]).toHaveTextContent("Personal SME");
  });

  it("test feature", () => {
    render(<Home />);
    const { container } = render(<Home />);
    const feature = container.querySelectorAll(".feature");
    expect(feature).toHaveLength(3);
  });
});
