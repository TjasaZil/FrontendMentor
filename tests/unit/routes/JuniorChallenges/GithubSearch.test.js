import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import GithubSearch from "@/routes/JuniorChallenges/GithubSearch.vue";
describe("GithubSearch", () => {
  describe("layout", () => {
    it("has a heading", () => {
      render(GithubSearch);
      const heading = screen.queryByTestId("main-heading-test");
      expect(heading).toBeVisible();
    });
    it("has a  heading with text devfinder", () => {});
    it("has text next to theme button", () => {});
    it("Has theme button", () => {});
    it("has a search icon", () => {});
    it("has an input", () => {});
    it("has placeholder text in input", () => {});
    it("has a search button", () => {});
    it("has profile picture", () => {});
    it("has profile name", () => {});
    it("has username", () => {});
    it("has profile bio", () => {});
    it("has date joined", () => {});
    it("has an information box", () => {});
    it("generates 3 headings and 3 numbers in the info box", () => {});
    it("has social media box", () => {});
    it("has location info", () => {});
    it("has location icon", () => {});
    it("has twitter info", () => {});
    it("has twitter icon", () => {});
    it("has site info", () => {});
    it("has site icon", () => {});
    it("has home info", () => {});
    it("has home icon", () => {});
  });
  describe("functionality", () => {
    it("changes the theme button on click", () => {});
    it("changes the theme text on click", () => {});
    it("searches for user when the search button is clicked", () => {});
  });
});
