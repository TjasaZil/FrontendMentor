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
          const list = screen.queryAllByRole("list");
          expect(list.length).toBe(2);
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
          const list = screen.queryAllByRole("list");
          expect(list.length).toBe(1);
        });
      });
      it("has list items when the menu icon is clicked", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          const item = screen.queryAllByRole("listitem");
          expect(item.length).toBe(10);
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
          const item = screen.queryAllByRole("listitem");
          expect(item.length).toBe(5);
        });
      });
    });
    describe("navigation text", () => {
      it("has appropriate navigation text", () => {
        render(News);
        let navigationArray = [
          "home",
          "new",
          "popular",
          "trending",
          "categories",
        ];
        for (let i = 0; i < navigationArray.length; i++) {
          let text = screen.queryByText(navigationArray[i]);
          expect(text).toBeInTheDocument();
        }
      });
      it("has 2 appropriate navigation texts when the button is clicked", async () => {
        render(News);
        const user = userEvent.setup();
        const menu = screen.queryByTestId("menu-icon-test");
        await user.click(menu);
        await waitFor(() => {
          let navigationArray = [
            "home",
            "new",
            "popular",
            "trending",
            "categories",
          ];
          for (let i = 0; i < navigationArray.length; i++) {
            let text = screen.queryAllByText(navigationArray[i]);
            expect(text.length).toBe(2);
          }
        });
      });
    });
    describe("Body Top", () => {
      it("it has hero image", () => {
        render(News);
        const hero = screen.queryByTestId("hero-image-test");
        expect(hero).toBeInTheDocument();
      });
      it("has visible hero image", () => {
        render(News);
        const hero = screen.queryByTestId("hero-image-test");
        expect(hero).toBeVisible();
      });
      it("has hero image with alt attribute", () => {
        render(News);
        const hero = screen.queryByAltText("hero image");
        expect(hero).toBeInTheDocument();
      });
      it("has hero image attribute alt", () => {
        render(News);
        const hero = screen.queryByAltText("hero image");
        expect(hero).toHaveAttribute("src");
      });
      it("has hero heading", () => {
        render(News);
        const heading = screen.queryByTestId("hero-heading-test");
        expect(heading).toBeInTheDocument();
      });
      it("has hero heading with an appropriate text", () => {
        render(News);
        const heading = screen.queryByText("The Bright Future of Web 3.0?");
        expect(heading).toBeInTheDocument();
      });
      it("has appropriate paragraph in the hero", () => {
        render(News);
        const paragraph = screen.queryByText(
          "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
        );
        expect(paragraph).toBeInTheDocument();
      });
      it("has button", () => {
        render(News);
        const button = screen.queryByRole("button");
        expect(button).toBeInTheDocument();
      });
      it("has button with text read more", () => {
        render(News);
        const button = screen.queryByRole("button");
        expect(button).toHaveTextContent("read more");
      });
      it("has a blog section", () => {
        render(News);
        const blog = screen.queryByTestId("blog-section-test");
        expect(blog).toBeInTheDocument();
      });
      it("has 2 separators in blog section", () => {
        render(News);
        const separator = screen.queryAllByRole("separator");
        expect(separator.length).toBe(2);
      });
      it("has blog section heading", () => {
        render(News);
        const heading = screen.queryByTestId("blog-section-heading");
        expect(heading).toBeInTheDocument();
      });
      it("has appropriate blog section heading text", () => {
        render(News);
        const heading = screen.queryByTestId("blog-section-heading");
        expect(heading).toHaveTextContent("New");
      });
      it("has 3 blog headings", () => {
        render(News);
        const heading = screen.queryAllByTestId("blog-small-heading");
        expect(heading.length).toBe(3);
      });
      describe("blog headings", () => {
        it("has blog heading text Hydrogen VS Electric Cars", () => {
          render(News);
          const heading = screen.queryByText("Hydrogen VS Electric Cars");
          expect(heading).toBeInTheDocument();
        });
        it("has a blog heading text The Downsides of AI Artistry", () => {
          render(News);
          const heading = screen.queryByText("The Downsides of AI Artistry");
          expect(heading).toBeInTheDocument();
        });
        it("has a blog heading text Is VC Funding Drying Up?", () => {
          render(News);
          const heading = screen.queryByText("Is VC Funding Drying Up?");
          expect(heading).toBeInTheDocument();
        });
      });
      it("has 3 blog paragraphs", () => {
        render(News);
        const paragraph = screen.queryAllByTestId("blog-paragraph-test");
        expect(paragraph.length).toBe(3);
      });
      describe("blog paragraphs", () => {
        it("has blog paragraph text Will hydrogen-fueled cars ever catch up to EVs?", () => {
          render(News);
          let paragraphArray = [
            "Will hydrogen-fueled cars ever catch up to EVs?",
            "What are the possible adverse effects of on-demand AI image generation?",
            "Is Private funding by VC firms is down 50% YOY. We take a look at what that means.",
          ];
          for (let i = 0; i < paragraphArray.length; i++) {
            const paragraph = screen.queryByText(paragraphArray[i]);
            expect(paragraph).toBeInTheDocument();
          }
        });
      });
    });
    describe("Body Bottom", () => {
      it("has 3 bottom images", () => {
        render(News);
        const image = screen.queryAllByTestId("bottom-image-test");
        expect(image.length).toBe(3);
      });
      it("has image with alt retro PCs", () => {
        render(News);
        const image = screen.queryByAltText("retro PCs");
        expect(image).toBeInTheDocument();
      });
      it("has retro pc image with src attribute", () => {
        render(News);
        const image = screen.queryByAltText("retro PCs");
        expect(image).toHaveAttribute("src");
      });
      it("has image with alt top laptops", () => {
        render(News);
        const image = screen.queryByAltText("top laptops");
        expect(image).toBeInTheDocument();
      });
      it("has top laptop image with src attribute", () => {
        render(News);
        const image = screen.queryByAltText("top laptops");
        expect(image).toHaveAttribute("src");
      });
      it("has image with growth of gaming alt", () => {
        render(News);
        const image = screen.queryByAltText("growth of gaming");
        expect(image).toBeInTheDocument();
      });
      it("has growth of gaming image with a src", () => {
        render(News);
        const image = screen.queryByAltText("growth of gaming");
        expect(image).toHaveAttribute("src");
      });
      it("has 3 numbers", () => {
        render(News);
        const number = screen.queryAllByTestId("number-test");
        expect(number.length).toBe(3);
      });
      it("has appropriate number text 01", () => {
        render(News);
        let numberArray = ["01", "02", "03"];
        for (let i = 0; i < numberArray.length; i++) {
          const number = screen.queryByText(numberArray[i]);
          expect(number).toBeInTheDocument();
        }
      });

      it("has 3 small headings", () => {
        render(News);
        const heading = screen.queryAllByTestId("small-bottom-heading");
        expect(heading.length).toBe(3);
      });
      it("has appropriate small headings ", () => {
        render(News);
        let headingArray = [
          "Reviving Retro PCs",
          "Top 10 Laptops of 2022",
          "The Growth of Gaming",
        ];
        for (let i = 0; i < headingArray.length; i++) {
          const heading = screen.queryByText(headingArray[i]);
          expect(heading).toBeInTheDocument();
        }
      });

      it("has 3 paragraphs", () => {
        render(News);
        const heading = screen.queryAllByTestId("small-bottom-paragraph");
        expect(heading.length).toBe(3);
      });
      it("has appropriate paragraphs with text What happens when old PCs are given modern upgrades?", () => {
        render(News);
        let paragraphArray = [
          "What happens when old PCs are given modern upgrades?",
          "Our best picks for various needs and budgets",
          "How the pandemic has sparked fresh opportunities",
        ];
        for (let i = 0; i < paragraphArray.length; i++) {
          const paragraph = screen.queryByText(paragraphArray[i]);
          expect(paragraph).toBeInTheDocument();
        }
      });
    });
  });
});
