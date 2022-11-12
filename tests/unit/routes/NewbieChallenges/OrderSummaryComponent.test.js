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
      it("has visible heading", () => {
        render(Order);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeVisible();
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
      it("has visible main paragraph", () => {
        render(Order);
        const paragraph = screen.queryByTestId("paragraph-text-test");
        expect(paragraph).toBeVisible();
      });
      it("has appropriate paragraph text", () => {
        render(Order);
        const textArray = [
          "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
          "annual plan",
          "change",
          "$59.99/year",
          "cancel order",
        ];
        for (let i = 0; i < textArray.length; i++) {
          const text = screen.queryByText(textArray[i]);
          expect(text).toBeInTheDocument();
        }
      });
      it("has visible paragraph text", () => {
        render(Order);
        const textArray = [
          "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
          "annual plan",
          "change",
          "$59.99/year",
          "cancel order",
        ];
        for (let i = 0; i < textArray.length; i++) {
          const text = screen.queryByText(textArray[i]);
          expect(text).toBeVisible();
        }
      });
    });
    describe("image", () => {
      it("has 2 images", () => {
        render(Order);
        const image = screen.queryAllByRole("img");
        expect(image.length).toBe(2);
      });
      it("has hero and note image in the document", () => {
        render(Order);
        const imageArray = ["hero-image-test", "note-icon-test"];
        for (let i = 0; i < imageArray.length; i++) {
          const image = screen.queryByTestId(imageArray[i]);
          expect(image).toBeInTheDocument();
        }
      });
      it("has hero and note image visible", () => {
        render(Order);
        const imageArray = ["hero-image-test", "note-icon-test"];
        for (let i = 0; i < imageArray.length; i++) {
          const image = screen.queryByTestId(imageArray[i]);
          expect(image).toBeVisible();
        }
      });
      it("has hero and note image src", () => {
        render(Order);
        const imageArray = ["hero-image-test", "note-icon-test"];
        for (let i = 0; i < imageArray.length; i++) {
          const image = screen.queryByTestId(imageArray[i]);
          expect(image).toHaveAttribute("src");
        }
      });
      it("has hero and note image with appropriate alt", () => {
        render(Order);
        const imageArray = ["hero-image-test", "note-icon-test"];
        const altArray = ["hero image", "note icon"];
        for (let i = 0; i < imageArray.length; i++) {
          const image = screen.queryByTestId(imageArray[i]);
          expect(image).toHaveAttribute("alt", altArray[i]);
        }
      });
    });
    describe("button", () => {
      it("has a button", () => {
        render(Order);
        const btn = screen.queryByRole("button");
        expect(btn).toBeInTheDocument();
      });
      it("has a button visible", () => {
        render(Order);
        const btn = screen.queryByRole("button");
        expect(btn).toBeValid();
      });
      it("has a button with appropriate text", () => {
        render(Order);
        const btn = screen.queryByRole("button");
        expect(btn).toHaveTextContent("Proceed to Payment");
      });
    });
  });
});
