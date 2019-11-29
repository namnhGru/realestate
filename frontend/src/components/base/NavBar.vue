<template>
  <div class="full-nav">
    <burger 
      class="col burger"
    />
    <branding
      class="col branding"
      :company="company"
    />
    <nav :class="`nav-bar ${active}`">
      <sub-menu 
        class="col one-twelve"
        style="float: right;"
        v-for="(subMenu, i) in subMenus" :key="i"
        :list="subMenu"
        :index="i"
        :closeOnClickedAnother="closeOnClickedAnother"
      />
    </nav>
  </div>
</template>

<script>
import SubMenu from '@/components/base/SubMenu.vue';
import Burger from '@/components/base/Burger.vue';
import Branding from '@/components/base/Branding.vue';
import { burgerEvent } from './event';

export default {
  name: 'NavBar',
  components: {
    SubMenu,
    Burger,
    Branding,
  },
  props: {
    subMenus: Array,
    closeOnClickedAnother: {
      type: Boolean,
      default: () => true,
    },
    company: Object,
  },
  data() {
    return {
      active: '',
    }
  },
  created() {
    const that = this;
    burgerEvent.$on('toggleNavBar', (status) => {
      that.active = status;
    })
  }
}
</script>

<style lang="scss" scoped>
  .burger {
    margin: 10px 0;
  }
  .nav-bar {
    &.active {
      display: block;
    }
  }
  

</style>