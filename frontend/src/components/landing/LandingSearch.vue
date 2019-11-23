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
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  div#landing-search__div--search {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 850px;
    background-position: center center;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;
    background-color: #546E26;
    color: white;
    h2 {
      font-size: 2.5em;
      font-family:'Times New Roman', Times, serif;
      font-stretch: 2;
      margin-top: 5%;
      margin-bottom: 0.5%;
      transform: scale(1.2,1.1);
    }

    p {
      margin-bottom: 1.5%;
    }

    form {
      display: flex;
      flex-direction: row;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 40px;
      background-color: white;
      min-height: 50px;
      min-width: 30%;
      input {
        border: none;
        min-width: 70%;
        margin-left: 5%;
        font-size: 1.1em;
      }
      p.landing-search__p-search-icon {
        text-align: center;
        align-self: center;
        margin-left: 15%;
        margin-top: 1%;
        min-width: 10%;
        font-size: 1.2em;
        color: gray;
      }
    }
  }
</style>