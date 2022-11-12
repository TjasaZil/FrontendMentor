import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import Ping from "@/routes/NewbieChallenges/PingCommingSoon.vue";

describe("PingCommingSoonPage", () => {
  describe("layout", () => {
    describe("text", () => {
      it("has 2 headings", () => {
        render(Ping);
        let heading = screen.queryAllByRole("heading");
        expect(heading.length).toBe(2);
      });
      it("has appropriate text", () => {
        render(Ping);
        const textArray = [
          "We are launching",
          "soon!",
          "Subscribe and get notified",
          "© Copyright Ping. All rights reserved.",
        ];
        for (let i = 0; i < textArray.length; i++) {
          const text = screen.queryByText(textArray[i]);
          expect(text).toBeInTheDocument();
        }
      });
    });
    describe("form", () => {
      it("has a form element", () => {
        render(Ping);
        let form = screen.queryByRole("form");
        expect(form).toBeInTheDocument();
      });
      it("has input", () => {
        render(Ping);
        let input = screen.queryByPlaceholderText("Your email address...");
        expect(input).toBeInTheDocument();
      });
      it("has button", () => {
        render(Ping);
        let button = screen.queryByRole("button");
        expect(button).toBeInTheDocument();
      });
      it("has appropriate text in button", () => {
        render(Ping);
        let button = screen.queryByRole("button");
        expect(button).toHaveTextContent("Notify me");
      });
    });
    describe("images", () => {
      it("has 5 images", () => {
        render(Ping);
        let img = screen.queryAllByRole("img");
        expect(img.length).toBe(5);
      });
      it("has appropriate image alt text", () => {
        render(Ping);
        const altArray = [
          "logo",
          "dashboard illustration",
          "facebook",
          "twitter",
          "instagram",
        ];
        for (let i = 0; i < altArray.length; i++) {
          const alt = screen.queryByAltText(altArray[i]);
          expect(alt).toBeInTheDocument();
        }
      });
      it("has appropriate image src", () => {
        render(Ping);
        const altArray = [
          "logo",
          "dashboard illustration",
          "facebook",
          "twitter",
          "instagram",
        ];
        for (let i = 0; i < altArray.length; i++) {
          const alt = screen.queryByAltText(altArray[i]);
          expect(alt).toHaveAttribute("src");
        }
      });
    });
  });
});
