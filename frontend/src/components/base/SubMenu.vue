<template>
  <div>
    <a class="title" href="#" @click="toggleDropdown()">{{ list.title }}<span v-if="hasDropdown"><i class="fas fa-angle-down"></i></span></a>
    <ul v-if="hasDropdown && dropdownIsClicked" class="nav-dropdown">
      <li v-for="(dropdown, j) in list.dropdowns" :key="j"><a class="sub" href="#!">{{ dropdown }}</a></li>
    </ul>
  </div>
</template>

<script>
import { navEvent } from './event';

export default {
  name: 'SubMenu',
  props: {
    list: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      default: () => null,
    },
  },
  data() {
    return {
      dropdownIsClicked: false,
    }
  },
  computed: {
    hasDropdown() {
      return this.list.hasOwnProperty('dropdowns');
    }
  },
  methods: {
    toggleDropdown() {
      navEvent.$emit(`subMenuClicked`, this.index);
    },
  },
  created() {
    const that = this;
    navEvent.$on('subMenuClicked', (index) => {
      that.dropdownIsClicked = that.index === index ? !that.dropdownIsClicked : false;
    })
  }
}
</script>

<style lang="scss" scoped>
  div {
    position: relative;
    &:hover {
      @include hover-block-color;
    }
    @include normal-block-color;
    text-align: center;
    min-width: 150px;
    a, a.title {
      display: block;
      &, &:visited, &:focus, &:hover, &:active {
        text-decoration: none;
        padding: 10px 10px;
      }
      &:hover {
      @include hover-block-color;
      }
      @include normal-block-color;
      span {
        display: inline-block;
        padding: 0 5px;
      }
    }
    ul {
      list-style: none;
      text-align: start;
      min-width: 150px;
      li {
        &:hover {
          @include hover-block-color;
        }
        @include normal-block-color;
      }
    }
  }
</style>