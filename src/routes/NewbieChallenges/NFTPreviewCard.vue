<template>
  <section
    class="h-screen bg-nft-main-bg pt-20 main flex flex-col justify-center items-center w-screen"
  >
    <section
      class="bg-nft-card-bg w-5/6 h-[543px] max-w-[350px] lg:h-[596px] rounded-xl space-y-5"
    >
      <div
        class="hover:bg-nft-cyan mt-6 rounded-xl mx-auto w-11/12 max-w-[325px] h-11/12 max-h-[325px]"
      >
        <img
          src="@/assets/NFTPreviewCard/icon-view.svg"
          alt="view icon"
          class="absolute z-50"
        />
        <img
          src="@/assets/NFTPreviewCard/image-equilibrium.jpg"
          alt="equilibrium"
          class="hover:opacity-70 rounded-xl w-11/12 max-w-[325px] h-11/12 max-h-[325px] mx-auto"
          x-intersect="$el.classList.add('swingIn')"
        />
      </div>
      <div class="w-11/12 mx-auto max-w-[325px]">
        <h1 x-intersect="$el.classList.add('fadeRightLeft')">
          equilibrium #3429
        </h1>
        <div role="paragraph" x-intersect="$el.classList.add('fadeLeftRight')">
          Our Equilibrium collection promotes balance and calm.
        </div>
      </div>
      <div
        class="w-11/12 max-w-[325px] mx-auto flex justify-between items-center"
      >
        <div
          class="flex justify-center items-center"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          <img
            src="@/assets/NFTPreviewCard/icon-ethereum.svg"
            alt="etherium icon"
          />
          <div role="paragraph">0.041eth</div>
        </div>
        <div
          class="flex justify-center items-center"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          <img src="@/assets/NFTPreviewCard/icon-clock.svg" alt="clock icon" />
          <div role="paragraph">3 days left</div>
        </div>
      </div>
      <hr
        class="w-11/12 max-w-[325px] mx-auto"
        x-intersect="$el.classList.add('fadeIn')"
      />
      <div
        class="w-11/12 max-w-[325px] mx-auto flex justify-start items-center"
        x-intersect="$el.classList.add('fadeInUp')"
      >
        <img
          src="@/assets/NFTPreviewCard/image-avatar.png"
          alt="Jules Wyvern avatar"
        />
        <div role="paragraph">Creation of <span>Jules Wyvern</span></div>
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
</style>
