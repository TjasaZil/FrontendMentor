import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Interactive from "@/routes/NewbieChallenges/InteractiveRatingComponent.vue";

describe("InteractiveRatingComponent", () => {
  describe("layout", () => {
    describe("text", () => {
      it("has a heading", () => {
        render(Interactive);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      it("has a heading when the button is clicked", async () => {
        render(Interactive);
        const user = userEvent.setup();
        const submit = screen.queryByTestId("submit-button-test");
        await user.click(submit);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      it("has How did we do? heading", () => {
        render(Interactive);
        const heading = screen.queryByText("How did we do?");
        expect(heading).toBeInTheDocument();
      });
      it("has a Thank you heading", async () => {
        const user = userEvent.setup();
        render(Interactive);
        const submit = screen.queryByTestId("submit-button-test");
        await user.click(submit);
        const heading = screen.queryByText("Thank you!");
        expect(heading).toBeInTheDocument();
      });
      it("has Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! text", () => {
        render(Interactive);
        const paragraph = screen.queryByText(
          "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        );
        expect(paragraph).toBeInTheDocument();
      });
      it("has We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! text", async () => {
        render(Interactive);
        const user = userEvent.setup();
        const submit = screen.queryByTestId("submit-button-test");
        await user.click(submit);
        const paragraph = screen.queryByText(
          "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        );
        expect(paragraph).toBeInTheDocument();
      });
    });
    describe("images", () => {
      it("has star image", () => {
        render(Interactive);
        const image = screen.queryByRole("img");
        expect(image).toBeInTheDocument();
      });
      it("has thank you image", async () => {
        render(Interactive);
        const user = userEvent.setup();
        const submit = screen.queryByTestId("submit-button-test");
        await user.click(submit);
        const image = screen.queryByRole("img");
        expect(image).toBeInTheDocument();
      });
      it("has image with alt star icon", () => {
        render(Interactive);
        const image = screen.queryByRole("img");
        expect(image).toHaveAttribute("alt", "star icon");
      });
      it("image with star icon has src", () => {
        render(Interactive);
        const image = screen.queryByRole("img");
        expect(image).toHaveAttribute("src");
      });
      it("has image with alt thank you image", async () => {
        render(Interactive);
        const user = userEvent.setup();
        const submit = screen.queryByTestId("submit-button-test");
        await user.click(submit);
        const image = screen.queryByRole("img");
        expect(image).toHaveAttribute("alt", "thank you image");
      });
      it("image with thank you image alt has a src", async () => {
        render(Interactive);
        const user = userEvent.setup();
        const submit = screen.queryByTestId("submit-button-test");
        await user.click(submit);
        const image = screen.queryByRole("img");
        expect(image).toHaveAttribute("src");
      });
    });
    describe("buttons", () => {
      it("has 6 buttons", () => {
        render(Interactive);
        const button = screen.queryAllByRole("button");
        expect(button.length).toBe(6);
      });
      it("has 5 round buttons", () => {
        render(Interactive);
        const button = screen.queryAllByTestId("value-button-test");
        expect(button.length).toBe(5);
      });
      it("has 1 submit button", () => {
        render(Interactive);
        const submit = screen.queryByTestId("submit-button-test");
        expect(submit).toBeInTheDocument();
      });
      describe("choose value button", () => {
        it("has button with text 1", () => {
          render(Interactive);
          const value = screen.queryByText("1");
          expect(value).toBeInTheDocument();
        });
        it("has button with text 2", () => {
          render(Interactive);
          const value = screen.queryByText("2");
          expect(value).toBeInTheDocument();
        });
        it("has button with text 3", () => {
          render(Interactive);
          const value = screen.queryByText("3");
          expect(value).toBeInTheDocument();
        });
        it("has button with text 4", () => {
          render(Interactive);
          const value = screen.queryByText("4");
          expect(value).toBeInTheDocument();
        });
        it("has button with text 5", () => {
          render(Interactive);
          const value = screen.queryByText("5");
          expect(value).toBeInTheDocument();
        });
        it("has button with value 1", () => {
          render(Interactive);
          const value = screen.queryByText("1");
          expect(value).toHaveValue("1");
        });
        it("has button with value 2", () => {
          render(Interactive);
          const value = screen.queryByText("2");
          expect(value).toHaveValue("2");
        });
        it("has button with value 3", () => {
          render(Interactive);
          const value = screen.queryByText("3");
          expect(value).toHaveValue("3");
        });
        it("has button with value 4", () => {
          render(Interactive);
          const value = screen.queryByText("4");
          expect(value).toHaveValue("4");
        });
        it("has button with value 5", () => {
          render(Interactive);
          const value = screen.queryByText("5");
          expect(value).toHaveValue("5");
        });
      });
      describe("submit button", () => {
        it("has submit button with text submit", () => {
          render(Interactive);
          const submit = screen.queryByText("submit");
          expect(submit).toBeInTheDocument();
        });
      });
    });
  });
});
