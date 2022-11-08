<template>
  <section
    class="main w-full h-screen bg-price-light-gray flex flex-col justify-center items-center"
  >
    <div
      class="w-11/12 mobilem:w-[311px] tablet:w-[635px] tablet:h-[475px] flex flex-col justify-center items-center drop-shadow-2xl shadow-black"
    >
      <div
        class="mx-auto bg-white rounded-t-lg mobilem:w-[311px] h-[228px] tablet:w-[635px] tablet:h-[259px] space-y-4"
      >
        <h1
          class="w-10/12 mx-auto text-price-cyan text-lg font-semibold mt-4 tablet:mt-6"
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
        <p
          class="w-10/12 mx-auto text-[13px] leading-5 text-price-grayish-blue rounded-b-lg tablet:leading-7 tablet:text-[16px]"
          data-testid="paragraph-test"
        >
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div
        class="mx-auto flex flex-col justify-center items-center tablet:flex-row tablet:w-[635px] tablet:h-[259px] rounded-b-lg"
      >
        <div
          class="flex flex-col justify-center items-center bg-price-cyan brightness-90 h-[227px] mobilem:w-[311px] tablet:w-[318px] tablet:h-[259px] space-y-3"
        >
          <h3
            class="text-white text-lg font-semibold w-10/12 mx-auto mt-2 tablet:-mt-3"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            Monthly Subscriptions
          </h3>
          <div
            class="flex flex-row justify-start items-center w-10/12 mx-auto space-x-4"
            x-intersect="$el.classList.add('fadeIn')"
          >
            <div class="text-4xl text-white font-bold">$29</div>
            <div>per month</div>
          </div>
          <p
            class="w-10/12 mx-auto text-sm text-white"
            data-testid="paragraph-test"
            x-intersect="$el.classList.add('fadeLeftRight')"
          >
            Full access for less than $1 a day
          </p>
          <button
            class="w-10/12 mx-auto mobilem:w-[263px] py-3 bg-price-bright-yellow rounded-lg text-white drop-shadow-xl shadow-price-grayish-blue"
            x-intersect="$el.classList.add('swingIn')"
          >
            Sign Up
          </button>
        </div>
        <div
          class="mx-auto bg-price-cyan h-[227px] mobilem:w-[311px] rounded-b-lg tablet:rounded-b-none space-y-4 tablet:w-[318px] tablet:h-[259px]"
        >
          <h3
            class="text-white text-lg font-semibold w-10/12 mx-auto mt-4 tablet:mt-7"
            x-intersect="$el.classList.add('fadeRightLeft')"
          >
            Why us
          </h3>
          <p
            class="w-7/12 mx-auto text-left text-[15px] tablet:text-[16px] tablet:leading-6 leading-5 ml-6"
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
