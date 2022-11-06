<template>
  <section
    class="main w-screen h-screen flex flex-col justify-center items-center bg-product-cream"
  >
    <section
      class="bg-white w-11/12 mobilel:w-10/12 mx-auto h-[611px] tablet:max-w-[343px] flex flex-col justify-start items-center rounded-md"
    >
      <img
        src="@/assets/ProductPreviewCardComponent/image-product-mobile.jpg"
        alt="a square bottle with a gold lid and a label"
      />
      <h2>perfume</h2>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <div role="paragraph">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </div>
      <section>
        <div role="paragraph">$149.99</div>
        <div role="paragraph">$169.99</div>
      </section>
      <button>
        <div class="flex mx-auto flex-center justify-center items-center w-1/3">
          <img
            src="@/assets/ProductPreviewCardComponent/icon-cart.svg"
            alt="button icon"
            class="w-7"
          />Add to Cart
        </div>
      </button>
    </section>
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
  font-family: "Fraunces", serif;
  /*font-family: 'Montserrat', sans-serif;*/
}
</style>
