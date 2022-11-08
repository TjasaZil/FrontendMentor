<template>
  <section
    class="main w-full h-screen bg-price-light-gray flex flex-col justify-center items-center"
  >
    <div
      class="w-11/12 mobilem:w-[311px] tablet:w-[635px] tablet:h-[475px] flex flex-col justify-center items-center drop-shadow-2xl shadow-black"
    >
      <div
        class="mx-auto bg-white rounded-t-lg mobilem:w-[311px] h-[228px] space-y-4"
      >
        <h1
          class="w-10/12 mx-auto text-price-cyan text-lg font-semibold mt-4"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          Join our community
        </h1>
        <h2
          class="w-10/12 mx-auto text-price-bright-yellow"
          x-intersect="$el.classList.add('fadeRightLeft')"
        >
          30-day, hassle-free money back guarantee
        </h2>
        <p class="w-10/12 mx-auto" data-testid="paragraph-test">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div
        class="mx-auto flex flex-col justify-center items-center tablet:flex-row"
      >
        <div
          class="flex flex-col justify-center items-center bg-price-cyan brightness-90 h-[227px] mobilem:w-[311px] space-y-3"
        >
          <h3
            class="text-white text-lg font-semibold w-10/12 mx-auto mt-4"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            Monthly Subscriptions
          </h3>
          <div
            class="flex flex-row justify-start items-center w-10/12 mx-auto space-x-4"
            x-intersect="$el.classList.add('fadeIn')"
          >
            <div>$29</div>
            <div>per month</div>
          </div>
          <p
            class="w-10/12 mx-auto"
            data-testid="paragraph-test"
            x-intersect="$el.classList.add('fadeLeftRight')"
          >
            Full access for less than $1 a day
          </p>
          <button
            class="w-10/12 mx-auto mobilem:w-[263px] py-3 bg-price-bright-yellow rounded-lg drop-shadow-xl shadow-price-grayish-blue"
            x-intersect="$el.classList.add('swingIn')"
          >
            Sign Up
          </button>
        </div>
        <div
          class="mx-auto bg-price-cyan h-[227px] mobilem:w-[311px] rounded-b-lg space-y-4"
        >
          <h3
            class="text-white text-lg font-semibold w-10/12 mx-auto mt-4"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            Why us
          </h3>
          <p
            class="w-10/12 mx-auto"
            data-testid="paragraph-test"
            x-intersect="$el.classList.add('fadeLeftRight')"
          >
            Tutorials by industry experts Peer & expert code review Coding
            exercises Access to our GitHub repos Community forum Flashcard decks
            New videos every week
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");
.main {
  font-family: "Karla", sans-serif;
}
</style>
