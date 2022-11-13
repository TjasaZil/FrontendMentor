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
        await user.click(button);
        waitFor(() => {
          expect(mockFun).toHaveBeenCalledTimes(1);
        });
      });
      it("has visible paragraph", () => {
        render(Bootcamp);
        const paragraph = screen.queryByTestId("paragraph-test");
        expect(paragraph).toBeVisible();
      });
      it("has visible name", () => {
        render(Bootcamp);
        const name = screen.queryByTestId("name-test");
        expect(name).toBeVisible();
      });
      it("has visible job", () => {
        render(Bootcamp);
        const job = screen.queryByTestId("job-test");
        expect(job).toBeVisible();
      });
    });

    describe("after button is clicked", () => {
      it("has visible image", async () => {
        const user = userEvent.setup();
        render(Bootcamp);
        const button = screen.queryByRole("button");
        await user.click(button);
        waitFor(() => {
          const image = screen.queryByAltText("user image");
          expect(image).toBeVisible();
        });
      });
      it("has visible button", async () => {
        const user = userEvent.setup();
        render(Bootcamp);
        const button = screen.queryByRole("button");
        await user.click(button);
        waitFor(() => {
          expect(button).toBeVisible();
        });
      });
      it("has working button", async () => {
        const user = userEvent.setup();
        render(Bootcamp);
        const button = screen.queryByRole("button");
        await user.click(button);
        await user.click(button);
        waitFor(() => {
          expect(mockFun).toBeCalledTimes(2);
        });
      });
      it("has visible paragraph", async () => {
        const user = userEvent.setup();
        render(Bootcamp);
        const button = screen.queryByRole("button");
        await user.click(button);
        waitFor(() => {
          const paragraph = screen.queryByTestId("paragraph-test");
          expect(paragraph).toBeVisible();
        });
      });
      it("has visible name", async () => {
        const user = userEvent.setup();
        render(Bootcamp);
        const button = screen.queryByRole("button");
        await user.click(button);
        waitFor(() => {
          const name = screen.queryByTestId("name-test");
          expect(name).toBeVisible();
        });
      });
      it("has visible job", async () => {
        const user = userEvent.setup();
        render(Bootcamp);
        const button = screen.queryByRole("button");
        await user.click(button);
        waitFor(() => {
          const job = screen.queryByTestId("job-test");
          expect(job).toBeVisible();
        });
      });
    });
  });
});
