<template>
  <section
    class="menu w-full h-screen bg-white flex flex-col justify-center items-center"
  >
    <div class="flex flex-col justify-center items-center text-center">
      <div>
        background and
        <div>
          <img
            src="@/assets/CodingBootcampTestimonials/image-tanya.jpg"
            alt="user image"
          />
          <button
            class="flex justify-between items-center px-5 py-2 rounded-full bg-green-500"
          >
            <img
              src="@/assets/CodingBootcampTestimonials/icon-prev.svg"
              alt="previous arrow"
            /><img
              src="@/assets/CodingBootcampTestimonials/icon-next.svg"
              alt="next arrow"
            />
          </button>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div>quote</div>
        <div>paragraph</div>
        <div>name</div>
        <div>job</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "CodingBootcamp",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");

.menu {
  font-family: "Inter", sans-serif;
}
</style>
