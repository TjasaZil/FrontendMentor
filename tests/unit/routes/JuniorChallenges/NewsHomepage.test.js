import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { screen, render, waitFor } from "@testing-library/vue";
import News from "@/routes/JuniorChallenges/NewsHomepage.vue";

describe("NewsHomepage", () => {
  describe("layout", () => {
    describe("navigation", () => {
      it("has logo", () => {
        render(News);
        const logo = screen.queryByTestId("logo-icon-test");
        expect(logo).toBeInTheDocument();
      });
      it("has visible logo", () => {
        render(News);
        const logo = screen.queryByTestId("logo-icon-test");
        expect(logo).toBeVisible();
      });
      it("has logo with alt text", () => {
        render(News);
        const logo = screen.queryByTestId("logo-icon-test");
        expect(logo).toHaveAttribute("alt", "logo icon");
      });
      it("has logo icon with src attribute", () => {
        render(News);
        const logo = screen.queryByTestId("logo-icon-test");
        expect(logo).toHaveAttribute("src");
      });
      it("has menu icon when the menu icon is not clicked", () => {
        render(News);
        const menu = screen.queryByTestId("menu-icon-test");
        expect(menu).toBeInTheDocument();
      });
      it("has menu icon with src attribute", () => {
        render(News);
        const menu = screen.queryByTestId("menu-icon-test");
        expect(menu).toHaveAttribute("src");
      });
      it("has menu icon with alt text", () => {
        render(News);
        const menu = screen.queryByTestId("menu-icon-test");
        expect(menu).toHaveAttribute("alt", "menu icon");
      });
      it("has invisible close icon when the menu button is not clicked", () => {
        render(News);
        const closed = screen.queryByTestId("closed-icon-test");
        expect(closed).toBeNull();
      });
      it("has menu close icon when menu icon is clicked", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const closed = screen.queryByTestId("closed-icon-test");
          expect(closed).toBeInTheDocument();
        });
      });
      it("has visible closed icon when the menu button is clicked", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const closed = screen.queryByTestId("closed-icon-test");
          expect(closed).toBeVisible();
        });
      });
      it("has closed button with a src attribute", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const closed = screen.queryByTestId("closed-icon-test");
          expect(closed).toHaveAttribute("src");
        });
      });
      it("has closed button with alt attribute", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const closed = screen.queryByTestId("closed-icon-test");
          expect(closed).toHaveAttribute("alt", "close menu icon");
        });
      });
      it("closes menu if the icon is double clicked", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.dblClick(menu);
        await waitFor(() => {
          const menu = screen.queryByTestId("menu-icon-test");
          expect(menu).toBeVisible();
        });
      });
      it("has a list when menu icon is clicked", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const list = screen.queryByRole("list");
          expect(list).toBeVisible();
        });
      });
      it("list disappears when clicked on the closed icon", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        const close = screen.queryByTestId("closed-icon-test");
        await user.click(close);
        await waitFor(() => {
          const list = screen.queryByRole("list");
          expect(list).toBeNull();
        });
      });
      it("has list items when the menu icon is clicked", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const item = screen.queryAllByRole("listitem");
          expect(item.length).toBe(5);
        });
      });
      it("list items disappear when clicked on the closed icon", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        const close = screen.queryByTestId("closed-icon-test");
        await user.click(close);
        await waitFor(() => {
          const item = screen.queryByRole("listitem");
          expect(item).toBeNull();
        });
      });
    });
    describe("navigation text", () => {
      it("has home text", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const item = screen.queryByText("home");
          expect(item).toBeVisible();
        });
      });
      it("has new text", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const item = screen.queryByText("new");
          expect(item).toBeVisible();
        });
      });
      it("has popular text", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const item = screen.queryByText("popular");
          expect(item).toBeVisible();
        });
      });
      it("has trending text", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const item = screen.queryByText("trending");
          expect(item).toBeVisible();
        });
      });
      it("has categories text", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const item = screen.queryByText("categories");
          expect(item).toBeVisible();
        });
      });
    });
  });
});
