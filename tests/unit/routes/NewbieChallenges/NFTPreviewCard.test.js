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
      it("has appropriate paragraph 1 text", () => {
        render(NFT);
        const paragraph = screen.queryByText(
          "Our Equilibrium collection promotes balance and calm."
        );
        expect(paragraph).toBeInTheDocument();
      });
      it("has appropriate paragraph 2 text", () => {
        render(NFT);
        const paragraph = screen.queryByText("0.041eth");
        expect(paragraph).toBeInTheDocument();
      });
      it("has appropriate paragraph 3 text", () => {
        render(NFT);
        const paragraph = screen.queryByText("3 days left");
        expect(paragraph).toBeInTheDocument();
      });
      it("has appropriate paragraph 4 text", () => {
        render(NFT);
        const paragraph = screen.queryByText("Creation of");
        expect(paragraph).toBeInTheDocument();
      });
      it("has appropriate span text", () => {
        render(NFT);
        const span = screen.queryByText("Jules Wyvern");
        expect(span).toBeInTheDocument();
      });
    });
    describe("images", () => {
      it("has 5 images", () => {
        render(NFT);
        const images = screen.queryAllByRole("img");
        expect(images.length).toBe(5);
      });
      it("clock icon has src", () => {
        render(NFT);
        const clock = screen.queryByAltText("clock icon");
        expect(clock).toHaveAttribute("src");
      });
      it("clock icon has alt", () => {
        render(NFT);
        const clock = screen.queryByAltText("clock icon");
        expect(clock).toBeInTheDocument();
      });
      it("eth icon has src", () => {
        render(NFT);
        const eth = screen.queryByAltText("etherium icon");
        expect(eth).toHaveAttribute("src");
      });
      it("eth has alt text", () => {
        render(NFT);
        const eth = screen.queryByAltText("etherium icon");
        expect(eth).toBeInTheDocument();
      });
      it("view icon has src", () => {
        render(NFT);
        const view = screen.queryByAltText("view icon");
        expect(view).toHaveAttribute("src");
      });
      it("view icon has alt", () => {
        render(NFT);
        const view = screen.queryByAltText("view icon");
        expect(view).toBeInTheDocument();
      });
      it("image avatar has src", () => {
        render(NFT);
        const avatar = screen.queryByAltText("Jules Wyvern avatar");
        expect(avatar).toHaveAttribute("src");
      });
      it("image avatar alt text", () => {
        render(NFT);
        const avatar = screen.queryByAltText("Jules Wyvern avatar");
        expect(avatar).toBeInTheDocument();
      });
      it("image equilibrium has src", () => {
        render(NFT);
        const equi = screen.queryByAltText("equilibrium");
        expect(equi).toHaveAttribute("src");
      });
      it("image equilibrium alt text", () => {
        render(NFT);
        const equi = screen.queryByAltText("equilibrium");
        expect(equi).toBeInTheDocument();
      });
    });
  });
});
