<template>
  <div id="landing-nav__div--top-nav">
    <nav class="div__nav--top-left-menu">
      <ul>
        <li v-for="(menu_title, i) in left_menus" :key="i">
          <p>{{ menu_title }}</p>
        </li>
      </ul>
    </nav>
    <h1 class="landing-nav__p-company">
      <span><i :class="company_logo"></i></span>{{ company_name }}
    </h1>
    <nav class="div__nav--top-right-menu">
      <ul>
        <li v-for="(menu_title, i) in right_menus" :key="i">
          <p>{{ menu_title }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LandingNav',
  props: {
    left_menus: Array,
    right_menus: Array,
    company_name:  {
      type: String,
      required: true,
    },
    company_logo: String,
  }
}
</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  div#landing-nav__div--top-nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    nav {
      min-height: 50px;
      flex-basis: 33.1%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8em;
      ul {
        min-width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }

    h1.landing-nav__p-company {
      flex-basis: 33.8%;
      text-align: center;
      align-self: center;
      color: #0C4499;
      span {
        display: inline-block;
        padding-right: 10px;  
      }
    }
  }
</style>