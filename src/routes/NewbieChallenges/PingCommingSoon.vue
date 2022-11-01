<template>
  <main
    class="bg-white flex items-center justify-center h-screen pt-5 flex-col font-['Libre_Franklin']"
  >
    <img
      src="@/assets/PingCommingSoon/logo.svg"
      alt="logo"
      class="content-center justify-center lg:w-[85px]"
      x-intersect="$el.classList.add('fadeLeftRight')"
    />
    <h1
      class="text-2xl font-thin mt-[50px] text-ping-gray lg:text-5xl"
      x-intersect="$el.classList.add('fadeRightLeft')"
    >
      We are launching
      <span class="font-bold text-ping-very-dark-blue">soon!</span>
    </h1>
    <h2
      class="text-sm mb-5 mt-4 lg:text-xl"
      x-intersect="$el.classList.add('fadeLeftRight')"
    >
      Subscribe and get notified
    </h2>
    <div
      role="form"
      class="flex flex-col items-center justify-center mt-5 lg:flex-row lg:w-[580px]"
      x-intersect="$el.classList.add('fadeIn')"
    >
      <input
        type="email"
        placeholder="Your email address..."
        class="peer border w-80 py-4 px-3 rounded-full border-ping-pale-blue placeholder:text-ping-gray lg:w-[380px] lg:h-56px"
        label="email"
        required
      />

      <button
        class="px-12 py-4 font-bold bg-ping-blue p-2 rounded-full mt-4 text-white text-sm hover:bg-ping-pale-blue lg:w-200px lg:h-56px lg:mt-0 lg:ml-6 drop-shadow-xl"
      >
        Notify me
      </button>
    </div>

    <img
      src="@/assets/PingCommingSoon/illustration-dashboard.png"
      alt="dashboard illustration"
      class="w-80 mt-[70px] lg:w-[580px]"
      x-intersect="$el.classList.add('swingIn')"
    />
    <footer class="mx-auto flex flex-col content-center justify-center">
      <div
        id="social-media"
        class="flex flex-row w-120px justify-center content-evenly mt-5"
        x-intersect="$el.classList.add('swingIn')"
      >
        <img
          src="@/assets/PingCommingSoon/facebook.png"
          alt="facebook"
          class="w-6 m-2 h-6"
        />
        <img
          src="@/assets/PingCommingSoon/twitter.png"
          alt="twitter"
          class="w-6 m-2 h-6"
        />
        <img
          src="@/assets/PingCommingSoon/instagram.png"
          alt="instagram"
          class="w-6 m-2 h-6"
        />
      </div>
      <p class="text-ping-gray font-thin text-xs mt-4">
        © Copyright Ping. All rights reserved.
      </p>
    </footer>
  </main>
</template>

<script>
export default {
  name: "PingCommingSoon",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,300;0,600;1,700&display=swap");
main {
  font-family: "Libre Franklin", sans-serif;
}
</style>
