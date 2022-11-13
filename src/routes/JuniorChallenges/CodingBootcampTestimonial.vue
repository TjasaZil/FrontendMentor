<template>
  <section
    class="menu w-full h-screen bg-white flex flex-col justify-center items-center"
  >
    <div
      class="flex flex-col justify-center items-center text-center w-11/12 mx-auto"
    >
      <div>
        background and
        <div>
          <img
            v-if="this.next"
            src="@/assets/CodingBootcampTestimonials/image-tanya.jpg"
            alt="user image"
          />
          <img
            v-else
            src="@/assets/CodingBootcampTestimonials/image-john.jpg"
            alt="user image"
          />
          <button
            class="flex justify-between items-center px-5 py-2 rounded-full bg-green-500"
            @click="nextTestimonial"
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
        <img
          src="@/assets/CodingBootcampTestimonials/pattern-quotes.svg"
          alt="quotes image"
        />
        <p v-if="this.next" data-testid="paragraph-test">
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </p>
        <p v-else data-testid="paragraph-test">
          “ If you want to lay the best foundation possible I’d recommend taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer. ”
        </p>
        <p v-if="this.next" data-testid="name-test">Tanya Sinclair</p>
        <p v-else data-testid="name-test">John Tarkpor</p>
        <p v-if="this.next" data-testid="job-test">UX Engineer</p>
        <p v-else data-testid="job-test">Junior Front-end Developer</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "CodingBootcamp",
  data() {
    return {
      next: true,
    };
  },
  methods: {
    nextTestimonial() {
      this.next = !this.next;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");

.menu {
  font-family: "Inter", sans-serif;
}
</style>
