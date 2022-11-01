<template>
  <section
    class="h-screen bg-nft-main-bg pt-20 main flex flex-col justify-center items-center w-screen"
  >
    <section
      class="bg-nft-card-bg w-5/6 h-[543px] max-w-[350px] lg:h-[596px] rounded-xl space-y-5 -mt-16"
    >
      <div
        class="overlay mt-6 rounded-xl mx-auto w-11/12 max-w-[325px] h-11/12 max-h-[325px] z-50"
        x-intersect="$el.classList.add('swingIn')"
      >
        <img
          src="@/assets/NFTPreviewCard/image-equilibrium.jpg"
          alt="equilibrium"
          class="hover:opacity-50 hover:scale-x-110 rounded-xl w-11/12 max-w-[325px] h-11/12 max-h-[325px] mx-auto"
        />
      </div>
      <div class="w-10/12 mx-auto max-w-[325px] space-y-5">
        <h1
          class="capitalize font-semibold text-lg tablet:text-xl tracking-wide hover:text-nft-cyan hover:cursor-pointer"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          equilibrium #3429
        </h1>
        <div
          role="paragraph"
          class="text-nft-soft-blue font-light text-base tablet:text-lg"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          Our Equilibrium collection promotes balance and calm.
        </div>
      </div>
      <div
        class="w-10/12 max-w-[325px] mx-auto flex justify-between items-center"
      >
        <div
          class="flex justify-center items-center uppercase text-nft-cyan font-medium text-base tablet:text-lg space-x-2"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          <img
            src="@/assets/NFTPreviewCard/icon-ethereum.svg"
            alt="etherium icon"
          />
          <div role="paragraph">0.041 eth</div>
        </div>
        <div
          class="flex justify-center items-center text-nft-soft-blue font-thin text-sm tablet:text-base space-x-2"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          <img src="@/assets/NFTPreviewCard/icon-clock.svg" alt="clock icon" />
          <div role="paragraph">3 days left</div>
        </div>
      </div>
      <hr
        class="w-10/12 max-w-[325px] mx-auto bg-nft-line border border-solid border-nft-line"
        x-intersect="$el.classList.add('fadeIn')"
      />
      <div
        class="w-10/12 max-w-[325px] mx-auto flex justify-start items-center space-x-3"
        x-intersect="$el.classList.add('fadeInUp')"
      >
        <img
          src="@/assets/NFTPreviewCard/image-avatar.png"
          alt="Jules Wyvern avatar"
          class="w-[33px] h-[33px] border border-solid border-white rounded-full"
        />
        <div
          role="paragraph"
          class="text-nft-soft-blue text-sm tablet:text-base font-thin"
        >
          Creation of
          <span
            class="text-white font-normal hover:cursor-pointer hover:text-nft-cyan"
            >Jules Wyvern</span
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "NFTPreviewCard",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap");
.main {
  font-family: "Outfit", sans-serif;
}
.overlay:hover {
  background-color: hsl(178, 100%, 50%);
  background-image: url("@/assets/NFTPreviewCard/icon-view.svg");
  background-repeat: no-repeat;
  background-position: 50%;
  transform: rotate(360deg);
  transition-duration: 1s;
  cursor: pointer;
}
</style>
