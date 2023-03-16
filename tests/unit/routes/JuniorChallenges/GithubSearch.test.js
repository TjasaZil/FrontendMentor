import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
//import { userEvent } from "@testing-library/user-event";
import GithubSearch from "@/routes/JuniorChallenges/GithubSearch.vue";
import axios from "axios";

jest.mock("axios");

describe("GithubSearch", () => {
  const createProps = (gitProps = {}) => ({
    avatar_url: "www.google.com",
    ...gitProps,
  });
  const renderUser = (gitProps) => {
    render(GithubSearch, {
      props: {
        git: {
          ...gitProps,
        },
      },
    });
  };
  describe("layout", () => {
    it("has a logo", () => {});
    it("has a theme toggle", () => {});
    it("has input field", () => {});
    it("has search button", () => {});
    it("renders avatar img", () => {
      const gitProps = createProps({ avatar_url: "www.facebook.com" });
      renderUser(gitProps);
      expect(screen.getByRole("img")).toBeVisible();
    });
    it("renders login", () => {});
    it("renders bio", () => {});
    it("renders blog", () => {});
    it("renders company", () => {});
    it("renders created_at", () => {});
    it("renders followers", () => {});
    it("renders folowing", () => {});
    it("renders location", () => {});
    it("renders name", () => {});
    it("renders repo", () => {});
    it("renders twitter", () => {});
  });
  describe("functionality", () => {
    it("changes text when we click on theme toggle", () => {});
    it("changes img when clicked on theme toggle", () => {});
    it("calls theme function when clicked on theme toggle", () => {});
    it("fetches data when clicked on a search button", () => {
      axios.get.mockResolvedValue({ data: [] });
      render(GithubSearch);
      expect(axios.get).toHaveBeenCalledWith(
        "https://api.github.com/users/octocat"
      );
    });
  });
});
