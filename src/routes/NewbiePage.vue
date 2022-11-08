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
          router="/nft-preview-card"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="QRImage"
          alt="QR Code Component"
          heading="QR Code Component"
          router="/qr-code-component"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="OrderImage"
          alt="Order Summary Component"
          heading="Order Summary Component"
          router="/order-summary-component"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="ProfileImage"
          alt="Profile Card Component"
          heading="Profile Card Component"
          router="/profile-card-component"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="ProductImage"
          alt="Product Preview Card Component"
          heading="Product Preview Card"
          router="/product-preview-card-component"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="InteractiveImage"
          alt="Interactive rating component"
          heading="Interactive Rating Component"
          router="/interactive-rating-component"
          x-intersect="$el.classList.add('swingIn')"
        />
        <Container
          :image="PingImage"
          alt="Ping comming soon"
          heading="Ping  Coming Soon Page"
          router="/ping-comming-soon"
          x-intersect="$el.classList.add('swingIn')"
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
import QRImage from "@/assets/QRCodeComponent/design/desktop-preview.jpg";
import PingImage from "@/assets/PingCommingSoon/design/desktop-preview.jpg";
import ProductImage from "@/assets/ProductPreviewCardComponent/design/desktop-preview.jpg";
import ProfileImage from "@/assets/ProfileCardComponent/design/desktop-preview.jpg";
import InteractiveImage from "@/assets/InteractiveRatingComponent/design/desktop-preview.jpg";
import OrderImage from "@/assets/OrderSumaryComponent/design/desktop-preview.jpg";
import Navigation from "@/components/Shared/Navigation/Navigation.vue";
import Footer from "@/components/Shared/Footer.vue";

export default {
  name: "NewbiePage",
  components: { IntroText, Container, Navigation, Footer },
  data() {
    return {
      NFTImage,
      QRImage,
      PingImage,
      ProfileImage,
      ProductImage,
      InteractiveImage,
      OrderImage,
    };
  },
};
</script>

<style></style>
