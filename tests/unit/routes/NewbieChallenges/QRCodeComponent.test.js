import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import QR from "@/routes/NewbieChallenges/QRCodeComponent.vue";

describe("QRCodeComponent", () => {
  describe("layout", () => {
    describe("image", () => {
      it("has an image", () => {
        render(QR);
        const image = screen.queryByRole("img");
        expect(image).toBeInTheDocument();
      });
      it("has an image with src", () => {
        render(QR);
        const image = screen.queryByRole("img");
        expect(image).toHaveAttribute("src");
      });
      it("has an image with alt text", () => {
        render(QR);
        const image = screen.queryByAltText("qr code image");
        expect(image).toBeInTheDocument();
      });
    });
    describe("text", () => {
      it("has a heading", () => {
        render(QR);
        const heading = screen.queryByRole("heading");
        expect(heading).toBeInTheDocument();
      });
      it("has a heading with appropriate text", () => {
        render(QR);
        const heading = screen.queryByText(
          "Improve your front-end skills by building projects"
        );
        expect(heading).toBeInTheDocument();
      });
      it("has a paragraph", () => {
        render(QR);
        const paragraph = screen.queryByRole("paragraph");
        expect(paragraph).toBeInTheDocument();
      });
      it("has a paragraph with appropriate text", () => {
        render(QR);
        const paragraph = screen.queryByText(
          "Scan the QR code to visit Frontend Mentor to take your coding skills to the"
        );
        expect(paragraph).toBeInTheDocument();
      });
      it("has appropriate span text", () => {
        render(QR);
        const span = screen.queryByText("next level");
        expect(span).toBeInTheDocument();
      });
    });
  });
});
