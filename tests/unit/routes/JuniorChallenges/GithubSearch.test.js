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
    it("has a  heading with text devfinder", () => {
      render(GithubSearch);
      const heading = screen.queryByText(/devfinder/i);
      expect(heading).toBeInTheDocument();
    });
    it("has text next to theme button", () => {
      render(GithubSearch);
      const themeText = screen.queryByTestId("theme-text-test");
      expect(themeText).toBeVisible();
    });
    it("Has theme button", () => {
      render(GithubSearch);
      const themeBtn = screen.queryByTestId("theme-btn-test");
      expect(themeBtn).toBeVisible();
    });
    it("has image in the theme btn", () => {
      render(GithubSearch);
      const themeImg = screen.queryByAltText("theme button image");
      expect(themeImg).toBeVisible();
    });
    it("has a search icon", () => {
      render(GithubSearch);
      const searchIcon = screen.queryByAltText("search icon");
      expect(searchIcon).toBeVisible();
    });

    it("has placeholder text in input", () => {
      render(GithubSearch);
      const input = screen.queryByPlaceholderText("Search GitHub username...");
      expect(input).toBeVisible();
    });
    it("has a search button", () => {
      render(GithubSearch);
      const searchBtn = screen.queryByTestId("search-btn-test");
      expect(searchBtn).toBeVisible();
    });
    it("has profile picture", () => {
      render(GithubSearch);
      const profileImg = screen.queryByTestId("profile-img-test");
      expect(profileImg).toBeVisible();
    });
    it("has profile name", () => {
      render(GithubSearch);
      const profileName = screen.queryByTestId("profile-name-test");
      expect(profileName).toBeVisible();
    });
    it("has username", () => {
      render(GithubSearch);
      const profileUsername = screen.queryByTestId("username-name-test");
      expect(profileUsername).toBeVisible();
    });
    it("has profile bio", () => {
      render(GithubSearch);
      const bio = screen.queryByTestId("profile-bio-test");
      expect(bio).toBeVisible();
    });
    it("has date joined", () => {
      render(GithubSearch);
      const date = screen.queryByTestId("profile-date-test");
      expect(date).toBeVisible();
    });
    it("has an information box", () => {
      render(GithubSearch);
      const date = screen.queryByTestId("profile-date-test");
      expect(date).toBeVisible();
    });
    it("generates 3 headings and 3 numbers in the info box", () => {
      render(GithubSearch);
      const infoHeadings = screen.queryAllByTestId("info-headings-test");
      const infoNumbers = screen.queryAllByTestId("info-numbers-test");
      expect(infoHeadings.length).toBe(3);
      expect(infoNumbers.length).toBe(3);
    });
    it("has social media box", () => {
      render(GithubSearch);
      const socialMedia = screen.queryByTestId("social-media-test");
      expect(socialMedia).toBeVisible();
    });
    it("has 4 social media icons", () => {
      render(GithubSearch);
      const socialMedia = screen.queryAllByTestId("social-icons-test");
      expect(socialMedia.length).toBe(4);
    });
  });
  describe("functionality", () => {
    it("changes the theme button on click", () => {});
    it("changes the theme text on click", () => {});
    it("searches for user when the search button is clicked", () => {});
  });
});
