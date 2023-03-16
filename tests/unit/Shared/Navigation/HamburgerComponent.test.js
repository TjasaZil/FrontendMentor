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
    it("has 4 list items", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(4);
    });
  });
  describe("list items names", () => {
    it("has home list item", async () => {
      const user = userEvent.setup();
      render(HamburgerComponent);
      let img = screen.queryByRole("img");
      await user.click(img);
      const itemArray = [
        "home",
        "newbie challenges",
        "junior challenges",
        "intermediate challenges",
      ];
      for (let i = 0; i < itemArray.length; i++) {
        const item = screen.queryByText(itemArray[i]);
        console.log(`Item found:`, item);
        expect(item).toBeInTheDocument();
      }
    });
  });
  describe("has appropriate links", () => {
    const urls = [
      { url: "https://localhost/", expect: "https://localhost/" },
      {
        url: "https://localhost/newbie-challenges",
        expect: "https://localhost/newbie-challenges",
      },
      {
        url: "https://localhost/junior-challenges",
        expect: "https://localhost/junior-challenges",
      },
    ];
    it("has appropriate href", async () => {
      global.window = Object.create(window);
      const user = userEvent.setup();
      let img = screen.queryByRole("img");
      render(HamburgerComponent);
      const defineUrl = (url) => {
        Object.defineProperty(window, "location", {
          value: {
            href: url,
          },
          writable: true,
        });
      };
      await user.click(img);
      const itemArray = ["home", "newbie challenges", "junior challenges"];
      for (let i = 0; i < urls.length; i++) {
        const item = screen.queryByText(itemArray[i]);
        await user.click(item);
        defineUrl(urls[i].url);
        expect(window.location.href).toEqual(urls[i].expect);
      }
    });
  });
});
