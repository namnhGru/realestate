<template>
  <div id="landing-advert__div--advert">
    <p>{{ first_advert }}</p>
    <p>{{ second_advert }}</p>
    <div class="landing_advert__div--seperator"></div>
    <ul>
      <li v-for="(card, i) in cards" :key="i">
        <landing-advert-card 
          :card_image="card.image"
          :card_title="card.title"
          :card_description="card.description"
          :card_button_text="card.button"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import LandingAdvertCard from '@/components/landing/LandingAdvertCard.vue';

export default {
  components: {
    LandingAdvertCard,
  },
  props: {
    first_advert: String,
    second_advert: String,
    cards: Array,
  }
}
</script>

<style lang="scss" scoped>
  div#landing-advert__div--advert {
    flex-direction: column;
    align-items: center;
    // max-width: 100%;
    margin-bottom: 5%;
    text-align: center;
    p {
      font-size: 1.4em;
      font-weight: 2em;
      font-family: 'Times New Roman', Times, serif;
      max-width: 80%;
    }

    p:first-child {
      margin: 10% auto;
    }
    
    div.landing_advert__div--seperator {
      margin: 10% 0;
      height: 2px;
      width: 40%;
      background-color: rgb(233, 219, 96);
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      min-height: 400px;
      justify-content: center;
      li {
        margin: 0 auto;
        list-style: none;
      }
    }
  }


</style>