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
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  div#landing-advert__div--advert {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin-bottom: 5%;
    p {
      font-size: 1.7em;
      font-weight: 2em;
      font-family: 'Times New Roman', Times, serif;
    }

    p:first-child {
      margin-top: 5%;
    }

    .landing_advert__div--seperator {
      margin: 5% 0;
    }
    
    div.landing_advert__div--seperator {
      height: 2px;
      width: 12%;
      background-color: rgb(25, 63, 102);
    }

    ul {
      display: flex;
      flex-direction: row;
      min-height: 400px;
      justify-content: center;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
      }
    }
  }


</style>