<template>
  <section
    class="menu w-full h-screen bg-white flex flex-col justify-center items-center"
  >
    <div
      class="flex flex-col justify-center items-center text-center w-11/12 mx-auto laptop:flex-row-reverse laptop:-space-x-10 laptop:w-full"
    >
      <div class="background laptop:relative">
        <img
          class="image"
          v-if="this.next"
          src="@/assets/CodingBootcampTestimonials/image-tanya.jpg"
          alt="user image"
          x-intersect="$el.classList.add('swingIn')"
        />
        <img
          class="image"
          v-else
          src="@/assets/CodingBootcampTestimonials/image-john.jpg"
          alt="user image"
          x-intersect="$el.classList.add('swingIn')"
        />
        <button
          class="flex justify-between items-center px-5 py-2 rounded-full bg-white w-28 h-14 mx-auto -mt-12 z-[100] sticky laptop:ml-14 laptop:-mt-8 hover:animate-pulse hover:opacity-90 hover:scale-105"
          @click="nextTestimonial"
          x-intersect="$el.classList.add('rollInBlurredLeft')"
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

      <div
        class="flex flex-col justify-center items-center mt-10 w-10/12 tablet:w-[540px] laptop:w-[635px] laptop:relative z-50 laptop:left-36 laptop:-mt-[52px]"
      >
        <img
          src="@/assets/CodingBootcampTestimonials/pattern-quotes.svg"
          alt="quotes image"
          class="w-2/12 -mb-10 laptop:w-[120px] laptop:mr-80"
          x-intersect="$el.classList.add('fadeIn')"
        />
        <p
          v-if="this.next"
          class="paragraph text-bootcamp-dark-blue"
          data-testid="paragraph-test"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          “ I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ”
        </p>
        <p
          v-else
          class="paragraph text-bootcamp-dark-blue"
          data-testid="paragraph-test"
          x-intersect="$el.classList.add('fadeLeftRight')"
        >
          “ If you want to lay the best foundation possible I’d recommend taking
          this course. The depth the instructors go into is incredible. I now
          feel so confident about starting up as a professional developer. ”
        </p>
        <div
          class="flex flex-col justify-center items-center laptop:flex-row laptop:space-x-3 laptop:text-left w-full laptop:justify-start mt-5 laptop:mt-10"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          <p
            v-if="this.next"
            class="name text-bootcamp-dark-blue"
            data-testid="name-test"
          >
            Tanya Sinclair
          </p>
          <p
            v-else
            class="name text-bootcamp-dark-blue"
            data-testid="name-test"
          >
            John Tarkpor
          </p>
          <p
            v-if="this.next"
            class="job text-bootcamp-grayish-blue"
            data-testid="job-test"
          >
            UX Engineer
          </p>
          <p
            v-else
            class="job text-bootcamp-grayish-blue"
            data-testid="job-test"
          >
            Junior Front-end Developer
          </p>
        </div>
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
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap");

.menu {
  font-family: "Inter", sans-serif;
  background-image: url("@/assets/CodingBootcampTestimonials/pattern-curve.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  background-position: 0% 100%;
}
@media only screen and (min-width: 1021px) {
  .menu {
    background-size: 610px;
    background-position: left bottom;
  }
  .background {
    padding: 80px;
  }
}
.background {
  background-image: url("@/assets/CodingBootcampTestimonials/pattern-bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: fit-content;
  position: relative;

  height: auto;
}
.image {
  @apply w-10/12 p-6 m-auto rounded-md laptop:w-[540px] mt-5 laptop:my-0 laptop:p-0 laptop:mt-8 laptop:mr-2 shadow-2xl shadow-bootcamp-dark-blue;
}
.paragraph {
  @apply font-light text-lg laptop:text-[32px] laptop:leading-[42px] text-left;
}
.name {
  @apply font-bold text-base  laptop:text-xl;
}
.job {
  @apply font-medium text-base laptop:text-xl;
}
</style>
