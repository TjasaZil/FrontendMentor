import Product from "@/routes/NewbieChallenges/ProductPreviewCardComponent.vue";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";

describe("ProductPreviewCardComponent", () => {
  describe("layout", () => {
    describe("text", () => {
      it("has 2 headings", () => {
        render(Product);
        let headings = screen.queryAllByRole("heading");
        expect(headings.length).toBe(2);
      });
      it("has perfume heading", () => {
        render(Product);
        let heading = screen.queryByText("perfume");
        expect(heading).toBeInTheDocument();
      });
      it("has Gabrielle Essence Eau De Parfum heading", () => {
        render(Product);
        let heading = screen.queryByText("Gabrielle Essence Eau De Parfum");
        expect(heading).toBeInTheDocument();
      });
      it("has a 3 paragraphs", () => {
        render(Product);
        let paragraphs = screen.queryAllByRole("paragraph");
        expect(paragraphs.length).toBe(3);
      });
      it("has appropriate big paragraph text", () => {
        render(Product);
        let paragraph = screen.queryByText(
          "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        );
        expect(paragraph).toBeInTheDocument();
      });
      it("has appropriate big cash text", () => {
        render(Product);
        let paragraph = screen.queryByText("$149.99");
        expect(paragraph).toBeInTheDocument();
      });
      it("has appropriate small cash text", () => {
        render(Product);
        let paragraph = screen.queryByText("$169.99");
        expect(paragraph).toBeInTheDocument();
      });
    });
    describe("image", () => {
      it("has a big image", () => {
        render(Product);
        let image = screen.queryByAltText(
          "a square bottle with a gold lid and a label"
        );
        expect(image).toBeInTheDocument();
      });
      it("has an image with alt", () => {
        render(Product);
        let image = screen.queryByAltText(
          "a square bottle with a gold lid and a label"
        );
        expect(image).toHaveAttribute("alt");
      });
      it("has an image with src", () => {
        render(Product);
        let image = screen.queryByAltText(
          "a square bottle with a gold lid and a label"
        );
        expect(image).toHaveAttribute("src");
      });
    });
    describe("button", () => {
      it("has a button with appropriate text", () => {
        render(Product);
        let text = screen.queryByText("Add to Cart");
        expect(text).toBeInTheDocument();
      });
      it("has a button with an appropriate image", () => {
        render(Product);
        let image = screen.queryByAltText("button icon");
        expect(image).toBeInTheDocument();
      });
    });
  });
});
