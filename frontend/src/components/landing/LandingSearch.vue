<template>
  <div :style="background_img_computed" id="landing-search__div--search">
    <h2>{{ slogan }}</h2>
    <p>{{ description }}</p>
    <form>
      <input type="text" :placeholder="search_placeholder">
      <p class="landing-search__p-search-icon"><i class="fas fa-search"></i></p>
    </form>
  </div>
  
</template>

<script>
export default {
  props: {
    slogan: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    search_placeholder: {
      type: String,
      required: true,
    },
    background_img: {
      type: String,
      required: true,
    },
  },
  computed: {
    background_img_computed() {
      return `background-image: url('${this.background_img}')`;
    }
  }
}
</script>

<style lang="scss" scoped>
  div#landing-search__div--search {
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    background-position: center center;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;
    background-color: #546E26;
    color: white;
    h2 {
      font-size: 2em;
      max-width: 250px;
      text-align: center;
      font-family:'Times New Roman', Times, serif;
      font-stretch: 2;
      margin-top: 10%;
      margin-bottom: 5%;
      transform: scale(1.2,1.1);
    }

    p {
      margin-bottom: 5%;
    }

    form {
      display: flex;
      flex-direction: row;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 40px;
      background-color: white;
      min-height: 50px;
      min-width: 80%;
      input {
        border: none;
        min-width: 70%;
        margin-left: 7%;
        font-size: 1.1em;
      }
      p.landing-search__p-search-icon {
        text-align: center;
        align-self: center;
        margin-left: 5%;
        margin-top: 5%;
        min-width: 10%;
        font-size: 1.2em;
        color: gray;
      }
    }
  }
</style>