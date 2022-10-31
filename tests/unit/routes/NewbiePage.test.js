import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import NewbiePage from "@/routes/NewbiePage.vue";

describe("NewbiePage", () => {
  describe("layout", () => {
    it("has IntroText component", () => {
      render(NewbiePage);
      const component = screen.queryByTestId("introtext-component-test");
      expect(component).toBeInTheDocument();
    });
    it("has a heading", () => {
      render(NewbiePage);
      const heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has appropriate heading", () => {
      render(NewbiePage);
      const heading = screen.queryByText("newbie challenges");
      expect(heading).toBeInTheDocument();
    });
    it("has separator", () => {
      render(NewbiePage);
      const separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has paragraph", () => {
      render(NewbiePage);
      const paragraph = screen.queryByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
    });
  });
});
