import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/vue";
import HamburgerComponent from "@/components/Shared/Navigation/HamburgerComponent.vue";

describe("HamburgerComponent", () => {
  describe("hamburger icon", () => {
    it("has a hamburger icon", () => {
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      expect(img).toBeInTheDocument();
    });
    it("has appropriate alt text", () => {
      render(HamburgerComponent);
      let img = screen.queryByAltText("Hamburger icon");
      expect(img).toBeInTheDocument();
    });
  });
  describe("menu links", () => {
    it("hides links if hamburger clicked twice", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      await user.click(img);
      let list = screen.queryByRole("list");
      expect(list).toBeNull();
    });
    it("has a no list if not clicked", () => {
      render(HamburgerComponent);
      let list = screen.queryByRole("list");
      expect(list).toBeNull();
    });
    it("shows list if hamburger is clicked", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      let list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
    it("has 3 list items", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(3);
    });
  });
  describe("list items names", () => {
    it("has home list item", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      let home = screen.queryByText("home");
      expect(home).toBeInTheDocument();
    });
    it("has newbie challenges list item", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      let newbie = screen.queryByText("newbie challenges");
      expect(newbie).toBeInTheDocument();
    });
    it("has junior challenges list item", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      let junior = screen.queryByText("junior challenges");
      expect(junior).toBeInTheDocument();
    });
  });
});
