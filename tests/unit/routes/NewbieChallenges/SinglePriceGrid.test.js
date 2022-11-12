import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/vue";
import Price from "@/routes/NewbieChallenges/SinglePriceGrid.vue";

describe("SinglePriceGrid", () => {
  describe("layout", () => {
    describe("text", () => {
      it("has 4 headings", () => {
        render(Price);
        const heading = screen.queryAllByRole("heading");
        expect(heading.length).toBe(4);
      });
      it("has appropriate heading text", () => {
        render(Price);
        const textArray = [
          "Join our community",
          "30-day, hassle-free money back guarantee",
          "Monthly Subscriptions",
          "Join our community",
        ];
        for (let i = 0; i < textArray.length; i++) {
          const text = screen.queryByText(textArray[i]);
          expect(text).toBeInTheDocument();
        }
      });

      it("has 3 paragraphs", () => {
        render(Price);
        const paragraph = screen.queryAllByTestId("paragraph-test");
        expect(paragraph.length).toBe(3);
      });
      it("has appropriate heading text", () => {
        render(Price);
        const textArray = [
          "Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.",
          "$29",
          "Full access for less than $1 a day",
          "per month",
          "Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week",
        ];
        for (let i = 0; i < textArray.length; i++) {
          const text = screen.queryByText(textArray[i]);
          expect(text).toBeInTheDocument();
        }
      });
    });
    describe("button", () => {
      it("has a button", () => {
        render(Price);
        const button = screen.queryByRole("button");
        expect(button).toBeInTheDocument();
      });
      it("has visible button", () => {
        render(Price);
        const button = screen.queryByRole("button");
        expect(button).toBeVisible();
      });
      it("has a button with appropriate text", () => {
        render(Price);
        const button = screen.queryByRole("button");
        expect(button).toHaveTextContent("Sign Up");
      });
    });
  });
});
