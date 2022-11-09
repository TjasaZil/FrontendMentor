import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Advice from "@/routes/JuniorChallenges/AdviceGenerator.vue";

describe("AdviceGenerator", () => {
  describe("layout", () => {
    describe("text", () => {
      it("has a heading", () => {
        render(Advice);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      it("has appropriate starting heading number", () => {
        render(Advice);
        const heading = screen.queryByRole("heading");
        expect(heading).toHaveTextContent("Advice #117");
      });
    });
    it("has appropriate starting advice", () => {
      render(Advice);
      const paragraph = screen.queryByTestId("paragraph-test");
      expect(paragraph).toHaveTextContent(
        "It is easy to sit up and take notice, what's difficult is getting up and taking action."
      );
    });
  });
  describe("buttons", () => {
    it("has a button", () => {
      render(Advice);
      const button = screen.queryByRole("button");
      expect(button).toBeInTheDocument();
    });

    describe("images", () => {
      it("has 2 images", () => {
        render(Advice);
        const image = screen.queryAllByRole("img");
        expect(image.length).toBe(2);
      });
      it("has 2 separators", () => {
        render(Advice);
        const separator = screen.queryAllByRole("separator");
        expect(separator.length).toBe(2);
      });
      it("has image with alt dice icon", () => {
        render(Advice);
        const dice = screen.queryByTestId("dice-icon-test");
        expect(dice).toHaveAttribute("alt", "dice icon");
      });
      it("dice icon has a src", () => {
        render(Advice);
        const dice = screen.queryByTestId("dice-icon-test");
        expect(dice).toHaveAttribute("src");
      });
      it("has separator image with alt separator", () => {
        render(Advice);
        const separator = screen.queryByTestId("separator-image-test");
        expect(separator).toHaveAttribute("alt", "separator");
      });
      it("has separator image with src", () => {
        render(Advice);
        const separator = screen.queryByTestId("separator-image-test");
        expect(separator).toHaveAttribute("src");
      });
    });
  });
});
