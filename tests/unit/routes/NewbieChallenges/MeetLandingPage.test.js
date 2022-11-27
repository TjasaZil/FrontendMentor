import { screen, render } from "@testing-library/vue";
import "@testing-library/jest-dom";
//import { UserEvent } from "@testing-library/user-event"
import Meet from "@/routes/NewbieChallenges/MeetLandingPage.vue";

describe("MeetLandingPage", () => {
  describe("layout", () => {
    describe("images", () => {
      it("has appropriate logo image visible", () => {});
      it("has appropriate tablet and mobila hero image", () => {});
      it("has appropriate desktop hero images", () => {});
      it("has appropriate footer image", () => {});
      it("has 4 pictures in the middle", () => {});
    });
    describe("text", () => {
      it("has appropriate headings visible", () => {});
      it("has appropriate paragraph text visible", () => {});
      it("has appropriate numbers visible", () => {});
    });

    describe("button", () => {
      it("has 3 buttons", () => {});
      it("has 2 download buttons", () => {});
      it("has one what is it button", () => {});
    });
  });
});
