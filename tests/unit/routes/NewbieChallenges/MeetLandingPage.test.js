import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
//import { UserEvent } from "@testing-library/user-event"
import Meet from "@/routes/NewbieChallenges/MeetLandingPage.vue";

describe("MeetLandingPage", () => {
  describe("layout", () => {
    describe("images", () => {
      it("has appropriate logo image visible", () => {
        render(Meet);
        const logo = screen.queryByAltText("Meet landing page logo");
        expect(logo).toBeVisible();
      });
      it("has a src attribute on meet logo", () => {
        render(Meet);
        const src = screen.queryByAltText("Meet landing page logo");
        expect(src).toHaveAttribute("src");
      });
      it("has appropriate tablet and mobile hero image", () => {
        render(Meet);
        const hero = screen.queryByTestId("mobile-tablet-hero-image");
        expect(hero).toBeInTheDocument();
      });
      it("has appropriate class on mobile/tablet hero", () => {
        render(Meet);
        const hero = screen.queryByTestId("mobile-tablet-hero-image");
        expect(hero).toHaveClass("mobile-hero");
      });
      it("has appropriate desktop left hero image", () => {
        render(Meet);
        const hero = screen.queryByTestId("desktop-left-hero-image");
        expect(hero).toBeInTheDocument();
      });
      it("has appropriate desktop right hero image", () => {
        render(Meet);
        const hero = screen.queryByTestId("desktop-right-hero-image");
        expect(hero).toBeInTheDocument();
      });
      it("has appropriate class on left desktop hero", () => {
        render(Meet);
        const hero = screen.queryByTestId("desktop-left-hero-image");
        expect(hero).toHaveClass("desktop-left-hero");
      });
      it("has appropriate class on right desktop hero", () => {
        render(Meet);
        const hero = screen.queryByTestId("desktop-right-hero-image");
        expect(hero).toHaveClass("desktop-right-hero");
      });
      it("has appropriate footer image", () => {
        render(Meet);
        const footer = screen.queryByTestId("footer-background-class");
        expect(footer).toHaveClass("footer");
      });
      it("has 4 pictures in the middle", () => {
        render(Meet);
        const image = screen.queryAllByAltText("People enjoying our services");
        expect(image.length).toBe(4);
      });
    });
    describe("text", () => {
      describe("has appropriate headings visible", () => {
        it("Group Chat for Everyone", () => {
          render(Meet);
          const heading = screen.queryAllByText(/Group Chat for Everyone/i);
          expect(heading.length).toBe(2);
        });
        it("built for modern use", () => {
          render(Meet);
          const heading = screen.queryByText(/built for modern use/i);
          expect(heading).toBeVisible();
        });
        it("Smarter meetings all in one place", () => {
          render(Meet);
          const heading = screen.queryByText(
            /Smarter meetings all in one place/i
          );
          expect(heading).toBeVisible();
        });
        it("Experience more together", () => {
          render(Meet);
          const heading = screen.queryByText(/Experience more together/i);
          expect(heading).toBeVisible();
        });
      });
      describe("has appropriate paragraph text visible", () => {
        it("Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.", () => {
          render(Meet);
          const text = screen.queryAllByText(
            /Meet makes it easy to connect with others face-to-face virtually and collaborate across any device./i
          );
          expect(text.length).toBe(2);
        });
        it("Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.", () => {
          render(Meet);
          const text = screen.queryByText(
            /Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export./i
          );
          expect(text).toBeVisible();
        });
        it("Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.", () => {
          render(Meet);
          const text = screen.queryByText(
            /Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions./i
          );
          expect(text).toBeVisible();
        });
      });
    });

    describe("button", () => {
      it("has 3 buttons", () => {
        render(Meet);
        const btn = screen.queryAllByRole("button");
        expect(btn.length).toBe(5);
      });
      it("has 3 download buttons", () => {
        render(Meet);
        const btn = screen.queryAllByText(/download/i);
        expect(btn.length).toBe(3);
      });
      it("has one what is it button", () => {
        render(Meet);
        const btn = screen.queryAllByText(/what is it?/i);
        expect(btn.length).toBe(2);
      });
    });
  });
});
