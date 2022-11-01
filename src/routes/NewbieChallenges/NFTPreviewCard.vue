<template>
  <section
    class="h-screen bg-nft-main-bg pt-20 main flex flex-col justify-center items-center w-screen"
  >
    <section
      class="bg-nft-card-bg w-5/6 h-[543px] max-w-[350px] lg:h-[596px] rounded-lg"
    >
      <div>
        <img src="@/assets/NFTPreviewCard/icon-view.svg" alt="view icon" />
        <img
          src="@/assets/NFTPreviewCard/image-equilibrium.jpg"
          alt="equilibrium"
        />
      </div>
      <div>
        <h1>equilibrium #3429</h1>
        <div role="paragraph">
          Our Equilibrium collection promotes balance and calm.
        </div>
      </div>
      <div>
        <div>
          <img
            src="@/assets/NFTPreviewCard/icon-ethereum.svg"
            alt="etherium icon"
          />
          <div role="paragraph">0.041eth</div>
        </div>
        <div>
          <img src="@/assets/NFTPreviewCard/icon-clock.svg" alt="clock icon" />
          <div role="paragraph">3 days left</div>
        </div>
      </div>
      <hr />
      <div>
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
