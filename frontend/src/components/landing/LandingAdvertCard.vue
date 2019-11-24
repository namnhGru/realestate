<template>
  <div class="landing-advert__div--card">
    <p><img :src="card_image_computed" :alt="card_description"></p>
    <h2>{{ card_title }}</h2>
    <p>{{ card_description }}</p>
    <button>{{ card_button_text }}</button>
  </div>
</template>

<script>
export default {
  name: 'LandingAdvertCard',
  props: {
    card_image: {
      type: String,
      required: true,
    },
    card_title: {
      type: String,
      required: true,
    },
    card_description: {
      type: String,
      required: true,
    },
    card_button_text: {
      type: String,
      required: true,
    },
  },
  computed: {
    card_image_computed() {
      return `${this.card_image}`
    },
  }
}
</script>

<style lang="scss" scoped>
  div.landing-advert__div--card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    // border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    p {
      margin: 5% auto;
      max-width: 80%;
    }

    p img {
      max-width: 80%;
      max-height: 80%;
      margin: 0;
    }

    button {
      background: none;
      box-shadow: none;
      text-shadow: none;
      border: 1px solid #1A416A;
      border-radius: 3px;
      min-height: 40px;
      min-width: 100px;
      margin-bottom: 2%;
    }
  }

</style>