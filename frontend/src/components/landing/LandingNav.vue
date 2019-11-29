<template>
  <div>
    <nav class="row">
      <div class="column one-twelve">
        <a :class="`hamburger ${hamburger_computed}`" href="#" @click="toggleHamburger()"><span class="hamburger-icon"></span></a>
      </div>
      <div class="column ten-twelve">
        <span class="company-logo">
          <i :class="company_logo"></i>
          <span>{{ company_name }}</span>
        </span>
      </div> 
    </nav>
    <!-- <div class="column one-twelve">
        <a :class="`search ${search_computed}`" href="#" @click="toggleSearch()"><span class="search-icon"><i class="fas fa-search"></i></span></a>
    </div> -->
    <div class="row">
      <ul v-if="hamburgerIsClicked" class="nav-list row">
        <li v-for="(list,i) in lists" :key="i">
          <a href="#" @click="toggleDropdown(i)">{{ list.title }}<span><i class="fas fa-angle-down"></i></span></a>
          <ul v-if="dropdownIsClicked === i" class="nav-dropdown">
            <li v-for="(dropdown, j) in list.dropdowns" :key="j"><a href="#!">{{ dropdown }}</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingNav',
  props: {
    lists: Array,
    company_name:  {
      type: String,
      required: true,
    },
    company_logo: String,
  },
  data() {
    return {
      hamburgerIsClicked: false,
      dropdownIsClicked: null,
    }
  },
  computed: {
    hamburger_computed() {
      return this.hamburgerIsClicked ? 'active' : '';
    },
  },
  methods: {
    toggleHamburger() {
      this.hamburgerIsClicked = !this.hamburgerIsClicked;
      this.dropdownIsClicked = null;
    },
    toggleDropdown(i) {
      this.dropdownIsClicked = this.dropdownIsClicked !== i ? i : null;
    }
  }
}
</script>

<style lang="scss" scoped>
// Mobile here
nav {
  text-align: center;
  font-size: 1.5em;
  padding: 10px 10px;
  div {
    a.search {
      display: inline-block;
      span.search-icon {

      }
    }
    a.hamburger { 
      display: block;
      padding: 10px 0;
      
      
      span.hamburger-icon {
        &, &:before, &:after {
          cursor: pointer;
          border-radius: 1px;
          height: 4px;
          width: 30px;
          background: black;
          position: absolute;
          display: block;
          content: '';
          transition: all 150ms ease-in-out;
        }
        &:before {
          top: -8px; 
        }
        &:after {
          bottom: -8px; 
        }
      }
      &.active {
        span {
          background-color: transparent;
          &:before, &:after {
            top: 0;
          }
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  span.company-logo {
    display: block;
    color: $company-branding-color;
    span {
      padding: 0 5px;
    }
  } 
}
ul.nav-list {
  position: static;
  list-style: none;
  li {
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    position: relative;
    a {
      display: block;
      padding: 15px;
      color: $company-branding-color;
      &, &:visited, &:hover, &:focus, &:active {
        text-decoration: none;
      }
      &:hover {
        background: $company-branding-color;
        color: white;
      }
      span {
        display: inline-block;
        padding: 0 10px;
      }
    }
    ul {
      position: absolute;
      z-index: 1;
      background: white;
      li {
        min-width: 100%;
        padding: 0;
        a {
          display: block;
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}  
</style>