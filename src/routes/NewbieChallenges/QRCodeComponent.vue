<template>
  <section
    class="bg-qr-light-gray main w-screen h-screen flex flex-col justify-center items-center"
  >
    <section
      class="w-11/12 max-w-[320px] h-[497px] bg-white rounded-xl shadow-lg space-y-4"
    >
      <img
        src="@/assets/QRCodeComponent/image-qr-code.png"
        alt="qr code image"
        class="w-11/12 max-w-[288px] mx-auto mt-5 rounded-xl hover:scale-105"
        x-intersect="$el.classList.add('swingIn')"
      />
      <h1
        class="text-qr-dark-blue font-bold w-9/12 mx-auto text-center text-lg tablet:text-xl mt-1 hover:shadow-lg hover:cursor-pointer hover:text-qr-grayish-blue hover:font-extrabold"
        x-intersect="$el.classList.add('fadeRightLeft')"
      >
        Improve your front-end skills by building projects
      </h1>
      <div
        role="paragraph"
        class="text-qr-grayish-blue font-normal w-9/12 mx-auto text-center text-sm tablet:text-[15px] tracking-normal"
        x-intersect="$el.classList.add('fadeLeftRight')"
      >
        Scan the QR code to visit Frontend Mentor to take your coding skills to
        the <span class="animate-pulse">next level</span>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "QRCodeComponent",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap");
.main {
  font-family: "Outfit", sans-serif;
}
</style>
