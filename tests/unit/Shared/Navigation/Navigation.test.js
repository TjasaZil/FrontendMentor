import { screen, render } from "@testing-library/vue";
//import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";

describe("Navigation", () => {
  it("has the HamburgerComponent", () => {
    render(Navigation);
    let component = screen.queryAllByTestId("hamburger-component-test");
    expect(component.length).toBe(2);
  });
  describe("heading", () => {
    it("has a heading", () => {
      render(Navigation);
      let heading = screen.queryByRole("heading");
      expect(heading).toBeInTheDocument();
    });
    it("has appropriate heading text", () => {
      render(Navigation);
      let heading = screen.queryByText("My Frontend Mentor Challenges");
      expect(heading).toBeInTheDocument();
    });
  });

  describe("links", () => {
    it("has a list", () => {
      render(Navigation);
      let list = screen.queryByRole("list");
      expect(list).toBeInTheDocument();
    });
    render(Navigation);
    it("has 4 list items", () => {
      render(Navigation);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(4);
    });
    describe("appropriate list items", () => {
      it("has appropriate listitem", () => {
        render(Navigation);
        const itemArray = ["home", "newbie", "junior, intermediate"];
        for (let i = 0; i < itemArray.length; i++) {
          const item = screen.queryByText(itemArray[i]);
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
      it("has appropriate href", () => {
        global.window = Object.create(window);
        render(Navigation);
        const defineUrl = (url) => {
          Object.defineProperty(window, "location", {
            value: {
              href: url,
            },
            writable: true,
          });
        };

        for (let i = 0; i < urls.length; i++) {
          defineUrl(urls[i].url);
          expect(window.location.href).toEqual(urls[i].expect);
        }
      });
    });
  });
});
