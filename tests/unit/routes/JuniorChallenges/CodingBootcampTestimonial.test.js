import "@testing-library/jest-dom";
import { screen, render, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import Bootcamp from "@/routes/JuniorChallenges/CodingBootcampTestimonial.vue";
const mockFun = jest.fn();

describe("CodingBootcampTestimonial", () => {
  describe("layout", () => {
    describe("before button is clicked", () => {
      it("has visible image", () => {
        render(Bootcamp);
        const img = screen.queryByAltText("user image");
        expect(img).toBeVisible();
      });
      it("has visible button", () => {
        render(Bootcamp);
        const button = screen.queryByRole("button");
        expect(button).toBeVisible();
      });
      it("has working button", async () => {
        const user = userEvent.setup();
        render(Bootcamp);
        const button = screen.queryByRole("button");
      });
      it("has visible paragraph", () => {});
      it("has visible name", () => {});
      it("has visible job", () => {});
    });

    describe("after button is clicked", () => {
      it("has visible image", () => {});
      it("has visible button", () => {});
      it("has working button", () => {});
      it("has visible paragraph", () => {});
      it("has visible name", () => {});
      it("has visible job", () => {});
    });
  });
});
