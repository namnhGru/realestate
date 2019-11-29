<template>
  <div>
    <a class="title" href="#" @click="toggleDropdown()">{{ list.title }}<span v-if="hasDropdown"><i class="fas fa-angle-down"></i></span></a>
    <ul v-if="hasDropdown && dropdownIsClicked" class="nav-dropdown">
      <li v-for="(dropdown, j) in list.dropdowns" :key="j"><a class="sub-menu" href="#!">{{ dropdown }}</a></li>
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
    closeOnClickedAnother: {
      type: Boolean,
    }
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
      if (!that.closeOnClickedAnother){
        that.dropdownIsClicked = that.index === index ? !that.dropdownIsClicked : that.dropdownIsClicked;
      } else {
        that.dropdownIsClicked = that.index === index ? !that.dropdownIsClicked : false;
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  div {
    &:hover {
      @include hover-block-color;
    }
    @include normal-block-color;
    position: relative;
    text-align: center;
    min-width: 150px;
    a, a.title {
      @include link-style;
      &:hover {
      @include hover-block-color;
      }
      @include normal-block-color;
      span {
        position: absolute;
        right: 3%;
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