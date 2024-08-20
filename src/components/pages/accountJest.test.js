import { render, screen } from "@testing-library/react";
import Account from "./Account";

describe("renders account page", () => {
  it("test h1", () => {
    render(<Account />);
    const account = screen.getByText("Account");
    expect(account).toBeVisible();
    expect(account).toBeInTheDocument();
  });

  it("test account section", () => {
    render(<Account />);
    const { container } = render(<Account />);
    const accountSection = container.querySelectorAll(".account-section");
    expect(accountSection).toHaveLength(3);
  });
});
