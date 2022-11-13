import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/vue";
import Advice from "@/routes/JuniorChallenges/AdviceGenerator.vue";
import userEvent from "@testing-library/user-event";
import { fetch } from "cross-fetch";
const mockApi = jest.fn();
//* FETCH POLYFILL
global.fetch = fetch;

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
    it("api call when button is clicked", async () => {
      const user = userEvent.setup();
      render(Advice);
      const button = screen.queryByRole("button");
      await user.click(button);
      waitFor(() => expect(mockApi).toHaveBeenCalledTimes(1));
    });
  });
  describe("images", () => {
    it("has 2 images", () => {
      render(Advice);
      const image = screen.queryAllByRole("img");
      expect(image.length).toBe(2);
    });
    it("has images with appropriate alt text", () => {
      render(Advice);
      const idArray = ["dice-icon-test", "separator-image-test"];
      const altArray = ["dice icon", "separator"];
      for (let i = 0; i < altArray.length; i++) {
        const alt = screen.queryByTestId(idArray[i]);
        expect(alt).toHaveAttribute("alt", altArray[i]);
      }
    });
    it("has images with src attribute", () => {
      render(Advice);
      const idArray = ["dice-icon-test", "separator-image-test"];

      for (let i = 0; i < idArray.length; i++) {
        const src = screen.queryByTestId(idArray[i]);
        expect(src).toHaveAttribute("src");
      }
    });
  });
});
