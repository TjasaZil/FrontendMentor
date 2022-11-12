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
    it("has appropriate heading", () => {
      render(NewbiePage);
      const heading = screen.queryByText("newbie challenges");
      expect(heading).toBeInTheDocument();
    });
  });
});
