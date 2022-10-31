import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import JuniorPage from "@/routes/JuniorPage.vue";

describe("NewbiePage", () => {
  describe("layout", () => {
    it("has IntroText component", () => {
      render(JuniorPage);
      const component = screen.queryByTestId("introtext-component-test");
      expect(component).toBeInTheDocument();
    });

    it("has appropriate heading", () => {
      render(JuniorPage);
      const heading = screen.queryByText("junior challenges");
      expect(heading).toBeInTheDocument();
    });
  });
});
