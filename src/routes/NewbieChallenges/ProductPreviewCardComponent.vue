<template>
  <section
    class="main w-screen h-screen flex flex-col justify-center items-center bg-product-cream"
  >
    <div
      class="bg-white w-10/12 mx-auto h-[611px] mobilem:w-[343px] flex flex-col justify-start items-center rounded-lg tablet:w-[600px] tablet:h-[450px] tablet:flex-row text-left"
    >
      <picture>
        <source
          media="(min-width:768px)"
          srcset="
            @/assets/ProductPreviewCardComponent/image-product-desktop.jpg
          "
        />
        <source
          media="(min-width:465px)"
          srcset="@/assets/ProductPreviewCardComponent/image-product-mobile.jpg"
        />
        <img
          src="@/assets/ProductPreviewCardComponent/image-product-mobile.jpg"
          alt="a square bottle with a gold lid and a label"
          class="rounded-t-lg tablet:rounded-t-none tablet:rounded-l-lg tablet:h-[450px] tablet:w-[300px]"
          x-intersect="$el.classList.add('swingIn')"
        />
      </picture>
      <div
        class="space-y-4 tablet:space-y-5 flex flex-col justify-center items-center tablet:w-[270px] mx-auto"
      >
        <h1
          class="w-10/12 mt-4 tablet:-mt-3 font-medium text-product-dark-grayish-blue uppercase tracking-[2px] text-sm"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          perfume
        </h1>
        <h2
          class="w-10/12 text-3xl font-bold text-product-very-dark-blue"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          Gabrielle Essence Eau De Parfum
        </h2>
        <p
          class="mx-auto w-10/12 text-[13px] leading-5 tablet:text-[14px] font-medium text-product-dark-grayish-blue tablet:leading-6"
          x-intersect="$el.classList.add('fadeIn')"
        >
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div
          class="flex flex-row justify-start items-center mx-auto w-10/12 space-x-8"
        >
          <p
            x-intersect="$el.classList.add('fadeLeftRight')"
            class="text-product-dark-cyan font-bold text-3xl big-cash"
          >
            $149.99
          </p>
          <p
            x-intersect="$el.classList.add('fadeRightLeft')"
            class="text-product-dark-grayish-blue line-through font-medium text-[13px]"
          >
            $169.99
          </p>
        </div>
        <button
          class="bg-product-dark-cyan w-10/12 rounded-lg text-center max-w-[295px] text-[13px] tablet:text-[14px] hover:bg-product-very-dark-blue"
          x-intersect="$el.classList.add('fadeIn')"
        >
          <div
            class="flex mx-auto flex-center justify-center items-center w-full py-3 my-auto space-x-3 font-bold"
            x-intersect="$el.classList.add('swingIn')"
          >
            <img
              src="@/assets/ProductPreviewCardComponent/icon-cart.svg"
              alt="button icon"
              class="w-4"
            />
            <p>Add to Cart</p>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductPreviewCardComponent",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap");
.main {
  font-family: "Montserrat", sans-serif;
}
h2,
.big-cash {
  font-family: "Fraunces", serif;
}
</style>
