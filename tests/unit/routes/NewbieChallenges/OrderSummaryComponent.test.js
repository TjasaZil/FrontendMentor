import "@testing-library/jest-dom";
import Order from "@/routes/NewbieChallenges/OrderSummaryComponent.vue";
import { screen, render } from "@testing-library/vue";

describe("OrderSummaryComponent", () => {
  describe("layout", () => {
    describe("text", () => {
      it("has heading", () => {
        render(Order);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      it("has a heading with appropriate text", () => {
        render(Order);
        const heading = screen.queryByText("order summary");
        expect(heading).toBeInTheDocument();
      });
      it("has a main paragraph", () => {
        render(Order);
        const paragraph = screen.queryByTestId("paragraph-text-test");
        expect(paragraph).toBeInTheDocument();
      });
      it("has text 'You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!'", () => {
        render(Order);
        const paragraph = screen.queryByText(
          "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
        );
        expect(paragraph).toBeInTheDocument();
      });
      it("has text Annual Plan", () => {
        render(Order);
        const paragraph = screen.queryByText("annual plan");
        expect(paragraph).toBeInTheDocument();
      });
      it("has text change", () => {
        render(Order);
        const paragraph = screen.queryByText("change");
        expect(paragraph).toBeInTheDocument();
      });
      it("has text $59.99/year", () => {
        render(Order);
        const paragraph = screen.queryByText("$59.99/year");
        expect(paragraph).toBeInTheDocument();
      });
      it("has Cancel Order text", () => {
        render(Order);
        const paragraph = screen.queryByText("cancel order");
        expect(paragraph).toBeInTheDocument();
      });
    });
    describe("image", () => {
      it("has 2 images", () => {
        render(Order);
        const image = screen.queryAllByRole("img");
        expect(image.length).toBe(2);
      });
      it("has hero image", () => {
        render(Order);
        const hero = screen.queryByTestId("hero-image-test");
        expect(hero).toBeInTheDocument();
      });
      it("has note image", () => {
        render(Order);
        const note = screen.queryByTestId("note-icon-test");
        expect(note).toBeInTheDocument();
      });
      it("has hero image with appropriate src", () => {
        render(Order);
        const hero = screen.queryByTestId("hero-image-test");
        expect(hero).toHaveAttribute("src");
      });
      it("has hero image with appropriate alt", () => {
        render(Order);
        const hero = screen.queryByTestId("hero-image-test");
        expect(hero).toHaveAttribute("alt", "hero image");
      });
      it("has note image with appropriate src", () => {
        render(Order);
        const note = screen.queryByTestId("note-icon-test");
        expect(note).toHaveAttribute("src");
      });
      it("has note image with appropriate alt", () => {
        render(Order);
        const note = screen.queryByTestId("note-icon-test");
        expect(note).toHaveAttribute("alt", "note icon");
      });
    });
    describe("button", () => {
      it("has a button", () => {
        render(Order);
        const btn = screen.queryByRole("button");
        expect(btn).toBeInTheDocument();
        expect(btn).toHaveTextContent("Proceed to Payment");
      });
      it("has a button with appropriate text", () => {
        render(Order);
        const btn = screen.queryByRole("button");
        expect(btn).toHaveTextContent("Proceed to Payment");
      });
    });
  });
});
