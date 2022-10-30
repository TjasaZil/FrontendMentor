import { screen, render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";

describe("Navigation", () => {
  it("has the HamburgerComponent", () => {
    render(Navigation);
    let component = screen.queryByTestId("hamburger-component-test");
    expect(component).toBeInTheDocument();
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
    it("has 3 list items", () => {
      render(Navigation);
      let listItems = screen.queryAllByRole("listitem");
      expect(listItems.length).toBe(3);
    });
    describe("appropriate list items", () => {
      it("has home listitem", () => {
        render(Navigation);
        let home = screen.queryByText("home");
        expect(home).toBeInTheDocument();
      });
      it("has newbies listitem", () => {
        render(Navigation);
        let newbies = screen.queryByText("newbie");
        expect(newbies).toBeInTheDocument();
      });
      it("has junior listitem", () => {
        render(Navigation);
        let junior = screen.queryByText("junior");
        expect(junior).toBeInTheDocument();
      });
    });
    describe("has appropriate links", () => {
      it("has appropriate home link", async () => {
        const user = userEvent.setup();
        render(Navigation);
        let home = screen.queryByText("home");
        await user.click(home);
        expect(window.location.href).toContain("/");
      });
      /*it("has appropriate newbie link", async () => {
        const user = userEvent.setup();
        render(Navigation);
        let newbie = screen.queryByText("newbie");
        await user.click(newbie);
        expect(window.location.href).toContain("/newbie-challenges");
      });
      it("has appropriate junior link", async () => {
        const user = userEvent.setup();
        render(Navigation);
        let junior = screen.queryByText("junior");
        await user.click(junior);
        expect(window.location.href).toContain("/junior-challenges");
      });*/
    });
  });
});
