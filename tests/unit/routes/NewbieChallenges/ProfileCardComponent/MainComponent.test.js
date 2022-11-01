import { mount } from "@vue/test-utils";
import MainComponent from "@/components/NewbieChallenges/ProfileCardComponent/MainComponent.vue";

describe("ProfileImage", () => {
  it("displays profile image", () => {
    const wrapper = mount(MainComponent);
    const imageFound = wrapper.findAll("[data-test='bg-image-test']");
    expect(imageFound.length).toBe(1);
  });
});
