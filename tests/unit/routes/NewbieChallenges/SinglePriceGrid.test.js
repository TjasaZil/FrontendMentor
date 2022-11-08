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
      it("has heading Join our community", () => {
        render(Price);
        const heading = screen.queryByText("Join our community");
        expect(heading).toBeInTheDocument();
      });
      it("has heading 30-day, hassle-free money back guarantee", () => {
        render(Price);
        const heading = screen.queryByText(
          "30-day, hassle-free money back guarantee"
        );
        expect(heading).toBeInTheDocument();
      });
      it("has Monthly Subscriptions heading", () => {
        render(Price);
        const heading = screen.queryByText("Monthly Subscriptions");
        expect(heading).toBeInTheDocument();
      });
      it("has heading Why us", () => {
        render(Price);
        const heading = screen.queryByText("Join our community");
        expect(heading).toBeInTheDocument();
      });
      it("has 3 paragraphs", () => {
        render(Price);
        const paragraph = screen.queryAllByTestId("paragraph-test");
        expect(paragraph.length).toBe(3);
      });
      it("has text: Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.", () => {
        render(Price);
        const text = screen.queryByText(
          "Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills."
        );
        expect(text).toBeInTheDocument();
      });
      it("has text $29", () => {
        render(Price);
        const text = screen.queryByText("$29");
        expect(text).toBeInTheDocument();
      });
      it("has text, per month ", () => {
        render(Price);
        const text = screen.queryByText("per month");
        expect(text).toBeInTheDocument();
      });
      it("has text Full access for less than $1 a day", () => {
        render(Price);
        const text = screen.queryByText("Full access for less than $1 a day");
        expect(text).toBeInTheDocument();
      });
      it("has a text  Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week", () => {
        render(Price);
        const text = screen.queryByText(
          "Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week"
        );
        expect(text).toBeInTheDocument();
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
