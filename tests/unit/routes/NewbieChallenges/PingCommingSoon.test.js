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
      it("has We are launching text", () => {
        render(Ping);
        let text = screen.queryByText("We are launching");
        expect(text).toBeInTheDocument();
      });
      it("has soon! text", () => {
        render(Ping);
        let text = screen.queryByText("soon!");
        expect(text).toBeInTheDocument();
      });
      it("has Subscribe and get notified text", () => {
        render(Ping);
        let text = screen.queryByText("Subscribe and get notified");
        expect(text).toBeInTheDocument();
      });
      it("has © Copyright Ping. All rights reserved. text", () => {
        render(Ping);
        let text = screen.queryByText("© Copyright Ping. All rights reserved.");
        expect(text).toBeInTheDocument();
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
      it("has a ping logo", () => {
        render(Ping);
        const img = screen.queryByAltText("logo");
        expect(img).toBeInTheDocument();
      });
      it("ping logo has src", () => {
        render(Ping);
        const img = screen.queryByAltText("logo");
        expect(img).toHaveAttribute("src");
      });
      it("has a illustration image", () => {
        render(Ping);
        const img = screen.queryByAltText("dashboard illustration");
        expect(img).toBeInTheDocument();
      });
      it("dashboard illustration has src", () => {
        render(Ping);
        const img = screen.queryByAltText("dashboard illustration");
        expect(img).toHaveAttribute("src");
      });
      it("has a facebook logo", () => {
        render(Ping);
        const img = screen.queryByAltText("facebook");
        expect(img).toBeInTheDocument();
      });
      it("facebook logo has src", () => {
        render(Ping);
        const img = screen.queryByAltText("facebook");
        expect(img).toHaveAttribute("src");
      });
      it("has a instagram logo", () => {
        render(Ping);
        const img = screen.queryByAltText("instagram");
        expect(img).toBeInTheDocument();
      });
      it("instagram logo has src", () => {
        render(Ping);
        const img = screen.queryByAltText("instagram");
        expect(img).toHaveAttribute("src");
      });
      it("has a twitter logo", () => {
        render(Ping);
        const img = screen.queryByAltText("twitter");
        expect(img).toBeInTheDocument();
      });
      it("twitter logo has src", () => {
        render(Ping);
        const img = screen.queryByAltText("twitter");
        expect(img).toHaveAttribute("src");
      });
    });
  });
});
