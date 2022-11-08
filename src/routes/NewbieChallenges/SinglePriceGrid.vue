<template>
  <section
    class="main w-full h-screen bg-price-light-gray flex flex-col justify-center items-center"
  >
    <div class="flex flex-col justify-center items-center rounded-lg">
      <div class="bg-white">
        <h1>Join our community</h1>
        <h2>30-day, hassle-free money back guarantee</h2>
        <p data-testid="paragraph-test">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>
      <div class="flex flex-col justify-center items-center tablet:flex-row">
        <div class="bg-price-cyan brightness-90">
          <h3>Monthly Subscriptions</h3>
          <div class="flex flex-row justify-start items-center">
            <div>$29</div>
            <div>per month</div>
          </div>
          <p data-testid="paragraph-test">Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
        <div class="bg-price-cyan">
          <h3>Why us</h3>
          <p data-testid="paragraph-test">
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
