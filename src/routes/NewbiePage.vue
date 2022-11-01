<template>
  <section>
    <section
      class="bg-slate-700 pt-20 laptopl:pt-28 min-h-screen text-slate-200"
    >
      <Navigation />
      <IntroText
        data-testid="introtext-component-test"
        heading="newbie challenges"
        paragraph="This page holds all of my finished newbie challenges."
      />
      <section
        class="mt-16 w-5/6 mx-auto flex flex-wrap justify-around items-center"
      >
        <Container
          :image="NFTImage"
          alt="NFT image"
          heading="NFT Preview Card Component"
          paragraph="The challenge is to build out this preview card component and get it looking as close to the design as possible."
          router="/nft-preview-card"
        />
        <Container
          :image="NFTImage"
          alt="QR Code Component"
          heading="QR Code Component"
          paragraph="The challenge is to build out this preview card component and get it looking as close to the design as possible."
          router="/qr-code-component"
        />
      </section>
    </section>
    <Footer />
  </section>
</template>

<script>
import IntroText from "@/components/Shared/IntroText.vue";
import Container from "@/components/Shared/Container.vue";
import NFTImage from "@/assets/NFTPreviewCard/design/desktop-design.jpg";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";
import Footer from "@/components/Shared/Footer.vue";

export default {
  name: "NewbiePage",
  components: { IntroText, Container, Navigation, Footer },
  data() {
    return {
      NFTImage,
    };
  },
};
</script>

<style></style>
