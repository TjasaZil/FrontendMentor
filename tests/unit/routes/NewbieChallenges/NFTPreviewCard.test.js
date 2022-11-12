import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import NFT from "@/routes/NewbieChallenges/NFTPreviewCard.vue";

describe("NFTPreviewCard", () => {
  describe("layout", () => {
    it("has separator", () => {
      render(NFT);
      const separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    describe("text", () => {
      it("has heading", () => {
        render(NFT);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      it("has visible heading", () => {
        render(NFT);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeVisible();
      });
      it("has appropriate heading", () => {
        render(NFT);
        const heading = screen.queryByText("equilibrium #3429");
        expect(heading).toBeInTheDocument();
      });
      it("has 4 paragraphs", () => {
        render(NFT);
        const paragraph = screen.queryAllByRole("paragraph");
        expect(paragraph.length).toBe(4);
      });
      it("has approipriate paragraph text", () => {
        render(NFT);
        const parAlt = [
          "Our Equilibrium collection promotes balance and calm.",
          "0.041 eth",
          "3 days left",
          "Creation of",
          "Jules Wyvern",
        ];
        for (let i = 0; i < parAlt.length; i++) {
          const paragraph = screen.queryByText(parAlt[i]);
          expect(paragraph).toBeInTheDocument();
        }
      });
    });
    describe("images", () => {
      it("has 4 images", () => {
        render(NFT);
        const images = screen.queryAllByRole("img");
        expect(images.length).toBe(4);
      });
      it("has appropriate image alt text", () => {
        render(NFT);
        const altAlt = [
          "clock icon",
          "etherium icon",
          "Jules Wyvern avatar",
          "equilibrium",
        ];
        for (let i = 0; i < altAlt.length; i++) {
          const alt = screen.queryByAltText(altAlt[i]);
          expect(alt).toBeInTheDocument();
        }
      });
      it("has appropriate image src Attribute", () => {
        render(NFT);
        const altAlt = [
          "clock icon",
          "etherium icon",
          "Jules Wyvern avatar",
          "equilibrium",
        ];
        for (let i = 0; i < altAlt.length; i++) {
          const alt = screen.queryByAltText(altAlt[i]);
          expect(alt).toHaveAttribute("src");
        }
      });
    });
  });
});
