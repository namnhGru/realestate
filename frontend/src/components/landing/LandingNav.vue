<template>
  <div id="landing-nav__div--top-nav">
    <nav class="div__nav--top-left-menu">
      <p class="mobile">{{ left_menus.title }}<span><i class="fas fa-angle-down"></i></span></p>
      <ul class="over-mobile">
        <li v-for="(menu_title, i) in left_menus.list" :key="i">
          <p>{{ menu_title }}</p>
        </li>
      </ul>
    </nav>
    <p class="landing-nav__p-company">
      <i :class="company_logo"></i>
      <span class="over-mobile">{{ company_name }}</span>
    </p>
    <nav class="div__nav--top-right-menu">
      <p class="mobile">{{ right_menus.title }}<span><i class="fas fa-angle-down"></i></span></p>
      <ul class="over-mobile">
        <li v-for="(menu_title, i) in right_menus.list" :key="i">
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
    left_menus: Object,
    right_menus: Object,
    company_name:  {
      type: String,
      required: true,
    },
    company_logo: String,
  }
}
</script>

<style lang="scss" scoped>
  @mixin center-one-item-flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @mixin dropdown-box {
    padding: 10px 10px;
    list-style: none;
    display: none;
    position: absolute;
    background-color: #FFFFFF;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  div#landing-nav__div--top-nav {
    justify-content: center;
    align-items: center;
    min-height: 40px;
    .over-mobile {
      display: none;
    }

    .fa-angle-down {
      margin-left: 5px;
    }

    p.landing-nav__p-company {
      font-size: 1.6em;
      color: #0C4499;
      order: 0;
      height: 100%;
      flex-grow: 2;
      @include center-one-item-flex-container;
    }

    nav:hover .over-mobile {
      // background-color: red;
      display: block;
      li:hover {
        background-color: rgba(25, 63, 102, 0.2);;
      }
    }

    nav.div__nav--top-left-menu {
      position: relative;
      display: inline-block;
      font-size: 0.8em;
      order: 1;
      flex-grow: 1;
      ul {
        @include dropdown-box;
      }
    }

    nav.div__nav--top-right-menu {
      position: relative;
      display: inline-block;
      font-size: 0.8em;
      order: 2;
      flex-grow: 1;
      ul {
        @include dropdown-box;
      }
    }

  }
  
</style>