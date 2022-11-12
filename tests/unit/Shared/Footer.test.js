import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import Footer from "@/components/Shared/Footer.vue";

describe("Footer", () => {
  describe("layout", () => {
    it("has copyright symbol", () => {
      render(Footer);
      let copy = screen.queryByText("© Zuzexx");
      expect(copy).toBeInTheDocument();
    });

    describe("social media images", () => {
      it("has 2 images", () => {
        render(Footer);
        let images = screen.queryAllByRole("img");
        expect(images.length).toBe(2);
      });
      it("has images with alt attribute", () => {
        render(Footer);
        const altArray = ["github", "linkedin"];
        for (let i = 0; i < altArray.length; i++) {
          const alt = screen.queryByAltText(altArray[i]);
          expect(alt).toBeInTheDocument();
        }
      });
      it("has images with src attribute", () => {
        render(Footer);
        const altArray = ["github", "linkedin"];
        for (let i = 0; i < altArray.length; i++) {
          const alt = screen.queryByAltText(altArray[i]);
          expect(alt).toHaveAttribute("src");
        }
      });
    });
    describe("social media links", () => {
      it("has two links", () => {
        render(Footer);
        let links = screen.queryAllByRole("link");
        expect(links.length).toBe(2);
      });
      it("has link with href github", () => {
        render(Footer);
        const idArray = ["github-link", "linkedin-link"];
        const urlArray = [
          "https://github.com/zuzexx",
          "https://www.linkedin.com/in/tjasa-zilavec/",
        ];
        for (let i = 0; i < idArray.length; i++) {
          const id = screen.queryByTestId(idArray[i]);
          expect(id).toHaveAttribute("href", urlArray[i]);
        }
      });
    });
  });
});
