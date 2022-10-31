import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import Home from "@/routes/Home.vue";

describe("Home", () => {
  describe("layout", () => {
    /* it("has heading", () => {
      render(Home);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });*/
    it("has appropriate heading", () => {
      render(Home);
      let heading = screen.queryByText("welcome to my frontend mentor page");
      expect(heading).toBeInTheDocument();
    });
    it("has separator", () => {
      render(Home);
      let separator = screen.queryByRole("separator");
      expect(separator).toBeInTheDocument();
    });
    it("has paragraph", () => {
      render(Home);
      let paragraph = screen.queryByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
    });
    describe("social media", () => {
      it("has two images", () => {
        render(Home);
        let images = screen.queryAllByRole("img");
        expect(images.length).toBe(5);
      });
      it("github image has src  attribute", () => {
        render(Home);
        let image = screen.queryByAltText("github-icon");
        expect(image).toHaveAttribute("src");
      });
      it("linkedin image has src attribute", () => {
        render(Home);
        let image = screen.queryByAltText("linkedin-icon");
        expect(image).toHaveAttribute("src");
      });
      it("has image with alt github", () => {
        render(Home);
        let image = screen.queryByAltText("github-icon");
        expect(image).toBeInTheDocument();
      });

      it("has image with alt linkedin", () => {
        render(Home);
        let image = screen.queryByAltText("linkedin-icon");
        expect(image).toBeInTheDocument();
      });
      it("has two links", () => {
        render(Home);
        let links = screen.queryAllByRole("link");
        expect(links.length).toBe(4);
      });
      it("has link with href github", () => {
        render(Home);
        let github = screen.queryByTestId("github-link-test");
        expect(github).toHaveAttribute("href", "https://github.com/zuzexx");
      });
      it("has link with href linkedin", () => {
        render(Home);
        let linkedin = screen.queryByTestId("linkedin-link-test");
        expect(linkedin).toHaveAttribute(
          "href",
          "https://www.linkedin.com/in/tjasa-zilavec/"
        );
      });
    });
  });
});
