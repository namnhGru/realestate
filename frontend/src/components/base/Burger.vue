<template>
  <div>
    <a :class="burgerClicked" href="#" @click="toggleHamburger()"><span></span></a>
  </div>
</template>

<script>
import { burgerEvent } from './event';

export default {
  name: 'Burger',
  data() {
    return {
      burgerClicked: '',
    }
  },
  methods: {
    toggleHamburger() {
      this.burgerClicked = this.burgerClicked === 'active' ? '' : 'active'
      burgerEvent.$emit('toggleNavBar', this.burgerClicked);
    }
  }
}
</script>

<style lang="scss" scoped>
  a { 
    display: block;
    padding: 10px;
    span {
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
</style>